#!/usr/bin/env python3
"""Build memenow brand assets from user-provided PNG masters.

Reads `static/brand/originals/{lockup-vertical,lockup-horizontal,app-icon,
reverse-on-coral}.png` and emits derivative variants under `static/brand/`:
mark, lockup-vertical, lockup-horizontal, reverse-on-coral at @1x/@2x/@3x in
PNG/WebP/AVIF, plus app-icon-{16,32,180,512}.png and a multi-resolution
favicon.ico at the static root.

Usage:
    python3 scripts/build-brand-assets.py

Re-run whenever the source PNGs in `static/brand/originals/` change.
"""
from __future__ import annotations

import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'static' / 'brand' / 'originals'
OUT = ROOT / 'static' / 'brand'
STATIC_ROOT = ROOT / 'static'

# Parchment background that the coral lockups sit on. Sampled from the source
# files; per-channel fuzz of 12 covers JPEG-style ringing and dithering.
PARCHMENT = (252, 247, 243)
PARCHMENT_FUZZ = 12

APP_ICON_SIZES = [16, 32, 180, 512]


def remove_parchment_bg(
    img: Image.Image,
    parchment: tuple[int, int, int] = PARCHMENT,
    fuzz: int = PARCHMENT_FUZZ,
) -> Image.Image:
    """Replace parchment-colored pixels with full transparency."""
    img = img.convert('RGBA')
    pixels = img.load()
    if pixels is None:
        return img
    width, height = img.size
    pr, pg, pb = parchment
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if (
                a > 0
                and abs(r - pr) <= fuzz
                and abs(g - pg) <= fuzz
                and abs(b - pb) <= fuzz
            ):
                pixels[x, y] = (r, g, b, 0)
    return img


def trim_transparent(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def resize_to_height(img: Image.Image, height: int) -> Image.Image:
    width, current_height = img.size
    new_width = max(1, round(width * height / current_height))
    return img.resize((new_width, height), Image.LANCZOS)


def save_variants(img: Image.Image, out_base: Path) -> None:
    out_base.parent.mkdir(parents=True, exist_ok=True)
    img.save(f'{out_base}.png', 'PNG', optimize=True)
    img.save(f'{out_base}.webp', 'WEBP', quality=92, method=6)
    img.save(f'{out_base}.avif', 'AVIF', quality=72, speed=4)


def emit_logo(
    src: Image.Image,
    out_name: str,
    height_1x: int,
) -> None:
    base = OUT / out_name
    save_variants(resize_to_height(src, height_1x), base)
    save_variants(resize_to_height(src, height_1x * 2), Path(f'{base}@2x'))
    save_variants(resize_to_height(src, height_1x * 3), Path(f'{base}@3x'))


def derive_lockups() -> None:
    for name, height in [
        ('lockup-vertical', 240),
        ('lockup-horizontal', 64),
    ]:
        src = remove_parchment_bg(Image.open(SRC / f'{name}.png'))
        src = trim_transparent(src)
        emit_logo(src, name, height)


def derive_reverse() -> None:
    # Coral background is intentional — keep it.
    src = Image.open(SRC / 'reverse-on-coral.png').convert('RGBA')
    emit_logo(src, 'reverse-on-coral', 240)


def derive_mark() -> None:
    """Crop the mark out of the vertical lockup (top ~60%)."""
    src = remove_parchment_bg(Image.open(SRC / 'lockup-vertical.png'))
    width, height = src.size
    top_band = src.crop((0, 0, width, int(height * 0.66)))
    mark = trim_transparent(top_band)
    emit_logo(mark, 'mark', 64)


def derive_app_icons() -> None:
    src = Image.open(SRC / 'app-icon.png').convert('RGBA')
    for size in APP_ICON_SIZES:
        scaled = src.resize((size, size), Image.LANCZOS)
        scaled.save(OUT / f'app-icon-{size}.png', 'PNG', optimize=True)
    src.save(
        STATIC_ROOT / 'favicon.ico',
        sizes=[(16, 16), (32, 32), (48, 48)],
    )


def write_site_manifest() -> None:
    manifest = {
        'name': 'memenow',
        'short_name': 'memenow',
        'description': 'Make AI your partner.',
        'start_url': '/',
        'display': 'standalone',
        'background_color': '#F7F7EE',
        'theme_color': '#F7F7EE',
        'icons': [
            {
                'src': '/brand/app-icon-180.png',
                'sizes': '180x180',
                'type': 'image/png',
            },
            {
                'src': '/brand/app-icon-512.png',
                'sizes': '512x512',
                'type': 'image/png',
            },
        ],
    }
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / 'site.webmanifest').write_text(
        json.dumps(manifest, indent=2) + '\n', encoding='utf-8'
    )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    derive_mark()
    derive_lockups()
    derive_reverse()
    derive_app_icons()
    write_site_manifest()
    print(f'Brand assets written to {OUT}')


if __name__ == '__main__':
    main()
