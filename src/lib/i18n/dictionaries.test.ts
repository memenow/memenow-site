import { describe, expect, it } from 'vitest';
import { SUPPORTED_LOCALES } from './locale-registry';
import { messages } from './messages.server';

// Structural key parity is enforced at compile time by `MessageSchema`; these
// checks cover what types cannot: empty translations, dropped placeholders,
// markup drift in TrustedHtml legal copy, and scholar-register / terminology
// discipline aligned with `yinyang-agent-ui/docs/reference/copy-style.html`.

type Entry = { path: string; value: string };

function collectStrings(node: unknown, path: string, out: Entry[]): Entry[] {
	if (typeof node === 'string') {
		out.push({ path, value: node });
	} else if (Array.isArray(node)) {
		node.forEach((item, i) => collectStrings(item, `${path}[${i}]`, out));
	} else if (node && typeof node === 'object') {
		for (const [key, value] of Object.entries(node)) {
			collectStrings(value, path ? `${path}.${key}` : key, out);
		}
	}
	return out;
}

const reference = new Map(collectStrings(messages.zh, '', []).map((e) => [e.path, e.value]));

/** Tags (with attributes) in order, e.g. `<a href="mailto:…">`, `</a>`. */
function tagsOf(value: string): string[] {
	return value.match(/<\/?[a-z][^>]*>/g) ?? [];
}

const BANNED_REGISTER_PATTERNS: ReadonlyArray<{ label: string; regex: RegExp }> = [
	{ label: 'Exclamation mark', regex: /[!！]/ },
	{ label: 'Legacy product casing (Yinyang Agent)', regex: /\bYinyang Agent\b/ },
	{
		label: 'Determinism framing',
		regex: /\b(destiny|fate|destino|destin)\b|命运|命運|運命|운명/i
	},
	{
		label: 'Self-improvement or SaaS hype',
		regex:
			/\b(journey|transform your life|manifest|effortless|seamless|empower|supercharge|elevate|AI-powered|cutting-edge|Get started|Learn more|Try it free|Try YinYang Agent Free)\b|旅程|探索之旅|免费体验|免費體驗|voyage|viaje|旅を続け/i
	},
	{
		label: 'Legacy feature naming',
		regex:
			/\b(daily prompts|Chart Portrait|Premium Addendum|Weekly Flow|AI Summary)\b|时机周期|时机日历|時機週期|時機日曆/i
	},
	{
		label: 'Heavy engineering jargon in consumer copy',
		regex:
			/\b(IANA|SwiftUI|TestFlight|StoreKit|Web3|MCP|SDK)\b|强类型|強型別|分布式系统|分散式系統|结构化契约|結構化契約|结构化网关|結構化閘道|決定論|결정론|determinista|déterministe/i
	},
	{
		label: 'Regional Eastern branding framing',
		regex: /\b(eastern|oriental|orientale|orientales)\b|东方|東方|東洋|동양/i
	},
	{
		label: 'Defensive or preachy anti-scam copy',
		regex:
			/不制造焦虑|不製造焦慮|倒计时弹窗|倒數彈窗|快餐断语|快餐斷語|快餐式算命|拒绝焦虑|拒絕焦慮|告别空泛标签|告別空泛標籤|抽象的なラベルではなく|막연한 성격 태그 대신|countdown pop-ups|instant gimmicks|alarmist claims/i
	},
	{
		label: 'Team regional location references',
		regex: /大中华区|大中華區|Greater China|中華圏|중화권|Gran China|Grande Chine|US · CN/i
	},
	{
		label: 'Patronizing cues or LLM boilerplate clichés',
		regex:
			/向下阅读|向下閱讀|零基础即可读懂|零基礎即可讀懂|打开即可读懂|開啟即可讀懂|四大日常课题|四大日常課題|界面简洁克制|介面簡潔克制|尊重你的独立判断|尊重你的獨立判斷|让判断建立在|讓判斷建立在|专为.*打造.*体验|專為.*打造.*體驗/
	}
];

describe.each(SUPPORTED_LOCALES)('dictionary %s', (locale) => {
	const entries = collectStrings(messages[locale], '', []);

	it('has the same string paths as the zh schema owner', () => {
		expect(entries.map((e) => e.path).sort()).toEqual([...reference.keys()].sort());
	});

	it('has no empty strings', () => {
		const empty = entries.filter((e) => e.value.trim() === '').map((e) => e.path);
		expect(empty).toEqual([]);
	});

	it('preserves runtime placeholders', () => {
		for (const { path, value } of entries) {
			for (const token of ['{year}', '{status}']) {
				if (reference.get(path)?.includes(token)) expect(value, path).toContain(token);
			}
		}
	});

	it('keeps trusted markup identical to the zh reference', () => {
		for (const { path, value } of entries) {
			expect(tagsOf(value).sort(), path).toEqual(tagsOf(reference.get(path) ?? '').sort());
		}
	});

	it('never translates the brand and cites memenow LLC in copyright', () => {
		expect(messages[locale].common.brand).toBe('memenow');
		expect(messages[locale].common.rightsReserved).toContain('memenow LLC');
		expect(messages[locale].common.rightsReserved).toContain('{year}');
	});

	it('conforms to the YinYang scholar register and canonical terminology', () => {
		for (const { path, value } of entries) {
			for (const rule of BANNED_REGISTER_PATTERNS) {
				expect(value, `${locale}:${path} matched banned rule "${rule.label}"`).not.toMatch(
					rule.regex
				);
			}
		}
	});
});
