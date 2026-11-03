---
marp: true
theme: default
paginate: true
header: 'C 語言 第 1 堂'
footer: '環境設定與第一支程式'
---

<style>
/* 統一中英文字型，避免簡體字 fallback 變細、與繁體粗細不一致 */
section {
  font-family: "Noto Sans TC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif;
}
section code, section pre, code {
  font-family: Consolas, "Cascadia Code", "Noto Sans TC", monospace;
}
</style>

<!-- _class: lead -->
# C 語言 第 1 堂

## 環境設定與第一支程式

從零開始，寫出你的第一支程式 🚀

---

# 今天要學會

1. 程式是什麼？電腦怎麼看懂它？
2. 一支 C 程式長什麼樣子
3. 用 `printf` 印出文字
4. 在洛谷送出第一支程式 ✅

---

# 電腦其實只懂 0 和 1

我們寫的程式，要先「翻譯」成電腦看得懂的語言：

```
你寫的程式碼  ──► 編譯器 ──► 可執行檔 ──► 螢幕看到結果
   (人看的)        翻譯        (機器看的)
```

> 💡 編譯器 = 翻譯官。拼錯字，翻譯官會抗議（編譯錯誤）。

---

# 最小的一支 C 程式

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

跑出來會看到：

```
Hello, World!
```

---

# 一行一行拆開看

| 程式碼 | 在做什麼 |
|--------|----------|
| `#include <stdio.h>` | 借用工具箱（printf 在裡面） |
| `int main() { }` | 程式的起點，**一定要有** |
| `printf("...")` | 把字印到螢幕 |
| `\n` | 換行 |
| `;` | 每行指令的句點 |
| `return 0;` | 正常結束 |

---

# `\n` 是什麼？

`\n` 是**換行符號**（一個字元，不是兩個）

```c
printf("第一行\n第二行\n");
```

輸出：

```
第一行
第二行
```

> 沒有 `\n`，所有字會擠在同一行！

---

# 初學者三大地雷 💣

1. **忘記分號 `;`**
   → 報錯常常指到「下一行」，別被騙了

2. **引號用成全形「」**
   → 一定要半形 `"`（小心中文輸入法）

3. **`printf` 拼成 `print`**
   → C 沒有 `print` 這個東西

---

# 動手做 ①：P1000 超級瑪麗

🔴 [P1000 超級瑪麗遊戲](https://www.luogu.com.cn/problem/P1000)

- 任務：把題目給的圖案**原封不動印出來**
- 只會用到 `printf`
- 小陷阱：要印反斜線 `\`，程式裡要寫 `\\`

> 體會：程式就是「一行一行，照順序執行」

---

# 動手做 ②：P1001 A+B

🔴 [P1001 A+B Problem](https://www.luogu.com.cn/problem/P1001)

每支程式都是這三段式 👇

```c
#include <stdio.h>
int main() {
    // 1. 讀入：用 scanf 讀兩個整數
    // 2. 處理：把它們相加
    // 3. 輸出：用 printf 印出結果
    return 0;
}
```

> `scanf` 下堂正式教，今天先感受架構：
> **讀入 → 處理 → 輸出**，自己把三步填完！

---

# 今天的作業 📝

🔴 必做　🟠 挑戰

- 🔴 [P1000 超級瑪麗遊戲](https://www.luogu.com.cn/problem/P1000)
- 🔴 [P1001 A+B Problem](https://www.luogu.com.cn/problem/P1001)
- 🔴 [P5703 蘋果採購](https://www.luogu.com.cn/problem/P5703)
- 🔴 [P5704 字母轉換](https://www.luogu.com.cn/problem/P5704)
- 🟠 [P5705 數字反轉](https://www.luogu.com.cn/problem/P5705)
- 🟠 [P2433 小學數學 N 合一](https://www.luogu.com.cn/problem/P2433)

---

<!-- _class: lead -->
# 下課前自我檢查 ✅

- [ ] 我能說出 `#include`、`main`、`printf`、`;` 的作用
- [ ] 我能自己打出 Hello World 並跑出來
- [ ] 我知道換行要用 `\n`
- [ ] 我至少有 1 題在洛谷 AC

**下堂預告：變數、資料型態與輸入輸出**
