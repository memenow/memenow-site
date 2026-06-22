#!/usr/bin/env python3
"""Build the Threlte ink-wash world assets from the curated shan-shui master.

Reads the primary master (candidate 007) from ``static/world/originals/``, heals
out the lone boat, and slices it into stacked depth planes for the parallax
world:

  - ``world-base`` : the full painting (backmost plane and static fallback)
  - ``world-mid``  : mid-ground mountains, alpha-feathered at the top edge
  - ``world-near`` : near foreground and water, alpha-feathered at the top edge

Each plane is emitted as AVIF / WebP at the master width (1672) under
``static/world/`` — the only two formats the world layer loads (the WebGL scene
and the static CSS fallback both read AVIF with a WebP fallback). The overlays
start partway down the frame and fade in over a feather band, so when the scene
parallaxes them over the full base no holes ever open — the base is always
complete behind them.

The ``top`` fractions below are the single source of truth for plane geometry;
they are mirrored by ``LAYERS`` in ``src/lib/components/layout/WorldScene.svelte``.

Usage:
    python3 scripts/build-world-assets.py

Re-run whenever the master in ``static/world/originals/`` changes.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'static' / 'world' / 'originals'
OUT = ROOT / 'static' / 'world'

MASTER = 'world-007.png'

# Output widths. The master is 1672px wide; never upscale past it. A single
# full-width source per plane is enough — as AVIF/WebP each plane is well under
# 300 KB, and the WebGL texture samples one source regardless of viewport.
WIDTHS = [1672]

# Boat heal. The lone boat sits on the water at lower-center; cover it with a
# clean water patch sampled from directly above (same x, shifted up) so the
# horizontal reflection banding stays seamless. Master pixels.
BOAT_BOX = (552, 852, 678, 902)  # (left, top, right, bottom) bounding the boat + hull
BOAT_SRC_DX = 135  # sample the clone patch this many px to the right (nearest open water)
BOAT_SRC_DY = 0  # ...at the same height, to match the reflection banding
BOAT_PAD = 34  # feather margin around the patch (wide, to dissolve the clone seam)

# Depth slicing, as fractions of the master height.
MID_TOP = 0.42  # mid-ground plane begins here
NEAR_TOP = 0.63  # near plane begins here
FEATHER = 0.12  # alpha fade height (fraction of total height) at each plane top


def heal_boat(img: Image.Image) -> Image.Image:
    """Paint clean water over the lone boat using a feathered clone patch."""
    img = img.convert('RGB')
    left, top, right, bottom = BOAT_BOX
    w, h = right - left, bottom - top
    pad = BOAT_PAD
    src_box = (
        left + BOAT_SRC_DX - pad,
        top + BOAT_SRC_DY - pad,
        right + BOAT_SRC_DX + pad,
        bottom + BOAT_SRC_DY + pad,
    )
    patch = img.crop(src_box)
    mask = Image.new('L', patch.size, 0)
    ImageDraw.Draw(mask).rectangle((pad, pad, pad + w, pad + h), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(pad))
    # Restore full opacity inside the box so the boat is fully covered; only the
    # outer margin keeps the feathered falloff into the surrounding water.
    ImageDraw.Draw(mask).rectangle((pad, pad, pad + w, pad + h), fill=255)
    img.paste(patch, (left - pad, top - pad), mask)
    return img


def make_overlay(img: Image.Image, top_frac: float, feather_frac: float) -> Image.Image:
    """Full-frame RGBA: transparent above ``top_frac`` of the height, the painting
    below, with a transparent->opaque feather over ``feather_frac`` of the height
    at the top edge. Same dimensions as the base, so every plane shares one
    cover-fit in the scene and the layers align without per-plane offsets."""
    w, h = img.size
    top = int(top_frac * h)
    feather = max(1, int(feather_frac * h))
    rgba = img.convert('RGBA')
    alpha = Image.new('L', (w, h), 0)
    ImageDraw.Draw(alpha).rectangle((0, top + feather, w, h), fill=255)
    ramp = Image.new('L', (1, feather))
    for y in range(feather):
        ramp.putpixel((0, y), round(255 * y / max(1, feather - 1)))
    alpha.paste(ramp.resize((w, feather)), (0, top))
    rgba.putalpha(alpha)
    return rgba


def save_variants(img: Image.Image, name: str, *, has_alpha: bool) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    mode = 'RGBA' if has_alpha else 'RGB'
    w0 = img.size[0]
    for width in WIDTHS:
        if width >= w0:
            scaled = img
        else:
            scaled = img.resize((width, round(img.size[1] * width / w0)), Image.LANCZOS)
        scaled = scaled.convert(mode)
        stem = name if width == WIDTHS[0] else f'{name}-{width}'
        base = OUT / stem
        scaled.save(f'{base}.webp', 'WEBP', quality=90, method=6)
        scaled.save(f'{base}.avif', 'AVIF', quality=70, speed=4)


def main() -> None:
    healed = heal_boat(Image.open(SRC / MASTER))
    save_variants(healed, 'world-base', has_alpha=False)
    save_variants(make_overlay(healed, MID_TOP, FEATHER), 'world-mid', has_alpha=True)
    save_variants(make_overlay(healed, NEAR_TOP, FEATHER), 'world-near', has_alpha=True)
    print(f'World assets written to {OUT}')


if __name__ == '__main__':
    main()
