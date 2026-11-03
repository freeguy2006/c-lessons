---
marp: true
theme: default
paginate: true
header: 'C 語言 第 10 堂'
footer: '字元與字串'
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
# C 語言 第 10 堂

## 字元與字串

讓程式處理文字 🔤

---

# 今天要學會

1. 字元與 ASCII 的關係
2. 字串 = char 陣列 + `'\0'`
3. 讀入 / 輸出字串
4. `string.h` 常用函式
5. 大小寫轉換、字元統計

---

# 字元背後是數字（ASCII）

```c
char c = 'A';
printf("%d\n", c);      // 65
printf("%c\n", c + 1);  // B
```

實用規律：
- `'a' - 'A' == 32`（大小寫差 32）
- `ch - '0'` → 數字字元變數值

```c
char ch = '7';
int num = ch - '0';   // 7
```

---

# 字串 = char 陣列

```c
char s[20] = "hello";   // 存 h e l l o \0
printf("%s\n", s);      // hello
printf("%c\n", s[0]);   // h
```

> `'\0'` 是字串的**結尾標記**
> 存 5 個字 → 至少開 `char s[6]`（留一格給 \0）

---

# 讀入字串

```c
char s[100];

scanf("%s", s);          // 一個單字（遇空白停）
fgets(s, 100, stdin);    // 整行（含空白）
```

> ⚠️ `%s` **不用加 `&`**（陣列名本身就是位址）

---

# string.h 常用函式

```c
#include <string.h>

strlen(s);        // 長度（不含 \0）
strcmp(a, b);     // 比較，相等回 0
strcpy(dst, src); // 複製
```

> ⚠️ 比較字串**不能用 `==`**，要用 `strcmp`！

---

# 走訪每個字元

```c
for (int i = 0; s[i] != '\0'; i++) {
    if (s[i] >= 'a' && s[i] <= 'z')
        s[i] = s[i] - 32;   // 小寫轉大寫
}
```

> 條件 `s[i] != '\0'` = 走到結尾就停

---

# 四大地雷 💣

1. **陣列沒留 `'\0'` 的位置** → 開太小
2. **用 `==` 比字串** → 要用 `strcmp`
3. **`scanf("%s", &s)` 多加 `&`**
4. **`%c` 與 `%s` 用錯**

---

# 動手做：P5733 / P1125

🔴 [P5733 自動修正](https://www.luogu.com.cn/problem/P5733)
→ 字串全轉大寫（走訪 + 轉換）

🔴 [P1125 笨小猴](https://www.luogu.com.cn/problem/P1125)
→ 統計字母次數，找最多/最少

---

# 今天的作業 📝

- 🔴 [P5733 自動修正](https://www.luogu.com.cn/problem/P5733)
- 🔴 [P1914 凱撒密碼](https://www.luogu.com.cn/problem/P1914)
- 🔴 [P5734 文字處理軟件](https://www.luogu.com.cn/problem/P5734)
- 🔴 [P1125 笨小猴](https://www.luogu.com.cn/problem/P1125)
- 🟠 [P1308 統計單詞數](https://www.luogu.com.cn/problem/P1308)
- 🟠 [P1957 口算練習題](https://www.luogu.com.cn/problem/P1957)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我知道字元背後是 ASCII
- [ ] 我會用 `ch - '0'` 轉數值
- [ ] 我知道字串結尾有 `'\0'`
- [ ] 比較字串用 `strcmp`

**下堂預告：自訂函式**
