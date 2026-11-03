// 上架前檢查：node tools/check.mjs
// 對照 CLAUDE.md 的規則，檢查 lessons.json 與 lessons/ 是否一致、有沒有誤放老師版解答。
// 全部通過才 exit 0。

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const err = msg => errors.push(msg);

// 只出現在老師版 main.md 的字樣；學生版講義出現就代表放錯檔
const FORBIDDEN = ['參考解答', '勿直接給', '講者筆記', '教學指引', '逐頁教學'];
// GitHub Pages 少了 .nojekyll 會用 Jekyll 處理 lessons/*.md
if (!existsSync(join(root, '.nojekyll'))) err('缺少 .nojekyll（見 CLAUDE.md 第 8 節）');

const ID_RE = /^(lesson-\d{2}|extra-\d{2})$/;
const COLORS = ['coral', 'teal', 'indigo', 'amber'];

let data;
try {
  data = JSON.parse(readFileSync(join(root, 'lessons.json'), 'utf8'));
} catch (e) {
  console.error(`✗ lessons.json 無法解析：${e.message}`);
  process.exit(1);
}

const moduleIds = new Set();
for (const m of data.modules) {
  for (const k of ['id', 'name', 'range', 'summary', 'color']) if (!m[k]) err(`模組 ${m.id ?? '?'} 缺少欄位 ${k}`);
  if (!COLORS.includes(m.color)) err(`模組 ${m.id} 的 color 必須是 ${COLORS.join('/')}`);
  moduleIds.add(m.id);
}

const seen = new Set();
const lastNo = {};
const moduleOrder = data.modules.map(m => m.id);
let lastModule = 0;
for (const l of data.lessons) {
  const where = `lessons.json 的 ${l.id ?? '(沒有 id)'}`;
  for (const k of ['id', 'module', 'no', 'title', 'summary']) if (!l[k]) err(`${where} 缺少欄位 ${k}`);
  if (!ID_RE.test(l.id)) err(`${where}：id 必須是 lesson-NN 或 extra-NN（兩位數）`);
  if (seen.has(l.id)) err(`${where}：id 重複`);
  seen.add(l.id);
  if (!moduleIds.has(l.module)) err(`${where}：module "${l.module}" 不存在`);
  if (typeof l.no !== 'string') err(`${where}：no 要用字串，例如 "4" 或 "E3"`);

  const expectNo = l.id.startsWith('extra-') ? `E${Number(l.id.slice(6))}` : String(Number(l.id.slice(7)));
  if (l.no !== expectNo) err(`${where}：no 應為 "${expectNo}"（要和 id 對應）`);

  const n = Number(String(l.no).replace(/^E/, ''));
  if (lastNo[l.module] !== undefined && n <= lastNo[l.module]) err(`${where}：同模組內要依堂數由小到大排列`);
  lastNo[l.module] = n;

  // 整個陣列依 modules 的順序排（CLAUDE.md 第 4 節第 4 步）
  const mi = moduleOrder.indexOf(l.module);
  if (mi < lastModule) err(`${where}：要排在「${data.modules[lastModule].name}」的講義前面（陣列依模組順序排列）`);
  lastModule = Math.max(lastModule, mi);

  if (!existsSync(join(root, 'lessons', `${l.id}.md`))) err(`${where}：找不到 lessons/${l.id}.md`);
}

// 內容檢查涵蓋 lessons/ 底下每一個檔案（包含還沒登記的）
for (const f of readdirSync(join(root, 'lessons'))) {
  if (!f.endsWith('.md')) { err(`lessons/${f}：lessons/ 只能放 .md 講義`); continue; }
  if (!seen.has(f.slice(0, -3))) err(`lessons/${f}：檔案存在但沒有登記在 lessons.json`);
  const src = readFileSync(join(root, 'lessons', f), 'utf8').replace(/\r\n?/g, '\n');
  for (const w of FORBIDDEN) if (src.includes(w)) err(`lessons/${f}：出現「${w}」，疑似放了老師版 main.md`);
  if (!/^---\n[\s\S]*?marp:\s*true[\s\S]*?\n---\n/.test(src)) err(`lessons/${f}：開頭必須是 Marp front matter（marp: true）`);
  else if (!/<!--\s*_class:\s*lead\s*-->/.test(src.split(/\n---\n/).slice(1, 3).join('\n'))) err(`lessons/${f}：第一頁應為封面（<!-- _class: lead -->）`);
}

if (errors.length) {
  console.error(errors.map(e => `✗ ${e}`).join('\n'));
  console.error(`\n共 ${errors.length} 個問題。`);
  process.exit(1);
}
console.log(`✓ 檢查通過：${data.modules.length} 個模組、${data.lessons.length} 份講義。`);
