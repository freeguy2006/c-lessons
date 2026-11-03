# C 語言家教講義

給純初學者的 C／C++ 家教講義網站：從第一支程式、APCS 演算法、物件導向，一路做到 raylib 小遊戲。

🔗 **網站**：<https://freeguy2006.github.io/c-lessons/>

## 功能

- **講義庫首頁**：依模組（基礎篇／演算法篇／C++・OOP 篇／番外篇）列出所有講義。
- **閱讀模式**：每頁投影片變成一張卡片，適合學生課後複習；可用 `#p5` 直接連到第 5 頁。
- **簡報模式**：同一份內容切成 16:9 投影片，`←` `→` 翻頁、全螢幕上課使用。
- **自我檢查清單可勾選**：進度存在自己的瀏覽器。

## 專案怎麼運作

- 講義內容是 `lessons/` 裡的 Marp Markdown，網站外殼（`index.html`、`lesson.html`）不需要為了新講義修改。
- `lessons.json` 是唯一的課程目錄。
- 給 AI 的開發規則寫在 [CLAUDE.md](CLAUDE.md)：新增一堂講義只要照第 4 節的步驟做。

## 本機預覽

```bash
python -m http.server 8080
# 開 http://127.0.0.1:8080/
```

上架前檢查：`node tools/check.mjs`

## 授權與致謝

- 講義內容 © 李侑霖。
- Markdown 解析：[marked](https://github.com/markedjs/marked)（MIT）；程式碼上色：[highlight.js](https://highlightjs.org/)（BSD-3-Clause）。
