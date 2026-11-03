# CLAUDE.md ── C 語言家教講義網站

> 給 AI（Claude Code、Codex 等）看的專案規則。開始任何修改前先讀完這份。
> 一句話：**這是一個「講義庫」網站，內容全是 Markdown，網站外殼不用動；新增講義＝放一份 md＋在 lessons.json 登記一筆。**

---

## 1. 專案目的

- 把我（李侑霖）家教用的 C／C++ 教材放上網，讓學生**課後自己複習**、我**上課直接投影**。
- 對象：從沒寫過程式的國高中生，一路學到 APCS 與 raylib 小遊戲。
- 網址：<https://freeguy2006.github.io/c-lessons/>（GitHub Pages，直接從 `main` 分支根目錄發布）。

## 2. 教材來源（在 repo 外面）

原始教材在本機 `D:\家教\C與C++\`，每堂一個資料夾：

| 檔案 | 給誰 | 能不能放上網站 |
|------|------|----------------|
| `slides.md` | 學生（Marp 簡報，有範例、**沒有作業解答**） | ✅ 這是唯一可以上架的檔案 |
| `main.md` | 老師（逐頁教案，**含每題參考解答**） | ❌ **絕對不可以**放進這個 repo |

- 課堂資料夾命名：`lesson4 - 分支(一)if-else`、`extra3 - 除錯與開發工具`。
- 各堂正式標題查表格的「主題」欄：第 1–25 堂與番外 E1–E12 查 `D:家教教學計畫總覽.md`；第 26–50 堂查 `D:家教CplusplusOOP篇總覽.md`（總綱裡沒有逐堂列出）。

## 3. 檔案結構

```
c-lessons/
├── CLAUDE.md          ← 本文件（AI 規則）
├── AGENTS.md          ← 指向本文件（給 Codex 等工具）
├── README.md          ← 給人看的簡介與本機預覽方式
├── .nojekyll          ← 關閉 GitHub Pages 的 Jekyll，讓 lessons/*.md 以原始檔提供（不可刪）
├── index.html         ← 首頁「講義庫」：依 lessons.json 自動畫卡片（不要寫死課程）
├── lesson.html        ← 通用講義閱讀器：lesson.html?id=lesson-04
├── lessons.json       ← ★ 唯一的課程目錄（模組＋講義清單）
├── lessons/           ← ★ 講義內容，每堂一份 .md（Marp 原檔）
│   ├── lesson-01.md
│   └── extra-03.md
├── assets/
│   ├── style.css      ← 全站樣式與配色變數
│   ├── home.js        ← 首頁渲染
│   ├── lesson.js      ← Marp 解析＋閱讀模式／簡報模式
│   ├── favicon.svg
│   └── vendor/        ← marked、highlight.js（本機副本，不要改）
├── ideas/
│   └── roadmap.md     ← 上架進度與之後要做的事
└── tools/
    └── check.mjs      ← 上架前檢查（node tools/check.mjs）
```

## 4. 新增一堂講義（最常見的任務）

依序做，不要跳步：

1. **找來源**：`D:\家教\C與C++\<課堂資料夾>\slides.md`。只讀 `slides.md`，不要打開 `main.md` 複製任何內容。
2. **決定 id 與檔名**
   - 正課第 N 堂 → `lesson-NN`（兩位數補 0）：第 4 堂 → `lesson-04`，第 16 堂 → `lesson-16`。
   - 番外 EN → `extra-NN`：E3 → `extra-03`。
   - 檔案放 `lessons/<id>.md`。
3. **複製內容**：把 `slides.md` **原封不動**複製成 `lessons/<id>.md`。
   - 保留開頭的 Marp front matter（`marp: true`、`header`、`footer`）、`<style>` 區塊、`<!-- _class: lead -->` 註解；閱讀器會自己處理。
   - 不要改寫教學內容、不要「順手」補解答或修題目。內容有錯請回報，改在來源檔。
4. **登記到 `lessons.json` 的 `lessons` 陣列**，放在同模組最後一堂的後面（同模組依堂數由小到大）：

   ```json
   {
     "id": "lesson-04",
     "module": "basic",
     "no": "4",
     "title": "分支 (一) if / if-else",
     "summary": "讓程式學會「看情況做不同的事」🔀"
   }
   ```

   | 欄位 | 規則 |
   |------|------|
   | `id` | 同第 2 步，必須和檔名一致 |
   | `module` | `basic`（1–15）、`algo`（16–25）、`oop`（26–50）、`extra`（E1–E12） |
   | `no` | **字串**。正課寫數字 `"4"`；番外寫 `"E3"` |
   | `title` | 抄表格的「主題」欄（哪份總覽見第 2 節最後一點）。例：第 4 堂 → `分支 (一) if / if-else`、第 26 堂 → `C++ 初登場` |
   | `summary` | 抄 slides 封面頁 `##` 副標題**下一行**的那句標語（有 emoji 就一起抄；可用 `code` 標程式碼） |

5. **跑檢查**：`node tools/check.mjs`，必須顯示 `✓ 檢查通過`。
6. **本機預覽**（見第 7 節），至少確認：首頁出現新卡片、講義頁能開、簡報模式能翻到最後一頁。
7. **更新 `ideas/roadmap.md`** 的上架進度。

> 一次新增很多堂時，每一堂都照 1–4 做完，最後跑一次 5–7 即可。

## 5. 講義 Markdown 的格式（Marp 子集）

閱讀器只支援以下語法；**新寫的講義也只能用這些**：

- 開頭 front matter：`marp: true`、`theme`、`paginate`、`header`、`footer`。
- 單獨一行 `---` 分頁（程式碼區塊裡的 `---` 不算）。
- `<!-- _class: lead -->`：該頁變成彩色封面頁（每份講義第一頁、最後的「自我檢查」頁）。
- 一般 Markdown／GFM：標題、清單、表格、引言 `>`、行內 code、程式碼區塊（標 ```` ```c ```` 或 ```` ```cpp ````，沒標語言就當純文字）。
- `- [ ] ...` 勾選清單：網站上可以勾，狀態存在學生自己的瀏覽器。
- 外部連結會自動另開分頁；練習題連結格式固定：洛谷 `https://www.luogu.com.cn/problem/題號`、ZeroJudge `https://zerojudge.tw/ShowProblem?problemid=題號`。
- **不支援**：Marp 背景圖語法 `![bg](...)`、多欄排版、其他 `_class`。需要圖片時放 `assets/img/<id>-說明.png`，用一般 `![說明](assets/img/...)` 引用。

## 6. 網頁風格（改 UI 時遵守）

- 調性：**溫暖的筆記本**。米色方格紙背景、深藍墨水字、粗黑框卡片＋模組色硬陰影。不要漸層大色塊、不要玻璃擬態。
- 四個模組各有一個顏色，定義在 `assets/style.css` 的 `:root`；HTML 只用 `data-color="coral|teal|indigo|amber"` 套色，**不要在 HTML／JS 寫死色碼**。
  - 基礎篇 `coral`、演算法篇 `teal`、C++／OOP 篇 `indigo`、番外篇 `amber`。
- 字型：內文 `Noto Sans TC / 微軟正黑體`，程式碼 `Consolas`。全站繁體中文。
- 介面文字口吻：對學生說話，短句、口語（「開始閱讀 →」「回到閱讀」）。
- 手機要能讀：寬度 390px 時不能出現左右捲動。

## 7. 本機預覽

`lesson.html` 用 `fetch` 讀檔，**不能直接雙擊開啟**，要開本機伺服器：

```bash
cd D:\家教\c-lessons
python -m http.server 8080
# 瀏覽 http://127.0.0.1:8080/
```

## 8. 不可以做的事

- ❌ 把任何 `main.md` 的內容（參考解答、講者筆記、引導話術）放進 repo。`tools/check.mjs` 會擋，但不要依賴它。
- ❌ 在 `index.html` 寫死課程卡片；課程只能出現在 `lessons.json`。
- ❌ 為了單一講義去改 `lesson.js` 的解析規則。內容配合格式，而不是格式配合內容；真的需要新語法，先在 `ideas/roadmap.md` 記下來討論。
- ❌ 改 `assets/vendor/` 裡的第三方檔案、改成從 CDN 載入。
- ❌ 加建置工具（npm 套件、打包器）。這個網站維持「純靜態檔＋GitHub Pages」。
- ❌ 刪掉 `.nojekyll`。少了它，GitHub Pages 會把 `lessons/*.md` 轉成 HTML，閱讀器就讀不到講義。

## 9. 其他常見任務

- **新增模組**：在 `lessons.json` 的 `modules` 加一筆（`id`、`name`、`range`、`summary`、`color`），`color` 只能從四色中選；若真需要第五色，先在 `style.css` 的 `:root` 與 `[data-color]` 補定義。
- **修改網站文字**：首頁大標在 `index.html`；首頁副標在 `lessons.json` 的 `site.tagline`。
- **改設計**：只改 `assets/style.css`，改完用桌機（1280px）和手機（390px）各看一次首頁與一份講義。

## 10. 完成前自我檢查

- [ ] `node tools/check.mjs` 通過
- [ ] 首頁卡片、講義頁、簡報模式都在本機看過
- [ ] 沒有任何 `main.md` 內容進到 repo
- [ ] `ideas/roadmap.md` 已更新
- [ ] commit 訊息寫清楚做了什麼，例如 `新增第 4–6 堂講義`
