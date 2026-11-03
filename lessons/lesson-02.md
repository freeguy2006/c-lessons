---
marp: true
theme: default
paginate: true
header: 'C 語言 第 2 堂'
footer: '變數、資料型態與輸入輸出'
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
# C 語言 第 2 堂

## 變數、資料型態與輸入輸出

讓程式學會「讀資料、算東西、印結果」📥➡️📤

---

# 今天要學會

1. 變數 = 裝資料的盒子
2. 三種型態：`int`、`float`、`char`
3. `printf` 的格式字元 `%d` `%f` `%c`
4. `scanf` 讀入資料（別忘了 `&`！）

---

# 變數 = 有名字的盒子 📦

```c
int age;         // 開一個叫 age 的盒子，只裝整數
age = 18;        // 把 18 放進去

int score = 90;  // 開盒子的同時放東西
```

> 盒子說好只裝整數，硬塞 `3.14` → 會被切成 `3`

---

# 三種一定要會的型態

| 型態 | 裝什麼 | 例子 | 格式 |
|------|--------|------|------|
| `int` | 整數 | `42`, `-5` | `%d` |
| `float`/`double` | 小數 | `3.14` | `%f` |
| `char` | 單一字元 | `'A'` | `%c` |

> ⚠️ `char` 用**單引號** `'A'`；雙引號 `"A"` 是字串！

---

# 輸出：printf 🖨️

```c
int a = 5;
float pi = 3.14;
printf("a = %d, pi = %f\n", a, pi);
```

輸出：
```
a = 5, pi = 3.140000
```

> `%d` 對應 `a`、`%f` 對應 `pi`
> **格式字元的數量、順序要跟變數對齊**

---

# 控制小數位數

```c
float pi = 3.14159;
printf("%.2f\n", pi);   // 3.14
printf("%.4f\n", pi);   // 3.1416
```

`%.2f` = 只留 2 位小數（會四捨五入）

---

# 輸入：scanf 📥

```c
int a, b;
scanf("%d %d", &a, &b);   // 讀兩個整數
```

# ⚠️ 最容易忘的事

變數前面要加 **`&`**！

```c
scanf("%d", &a);   // ✅ 對
scanf("%d", a);    // ❌ 程式會當掉
```

> 為什麼要 `&`？第 13 堂「指標」會解答，現在先記住口訣。

---

# 程式三段式 🧩

從今天起，每題都這樣想：

```
讀入 (scanf)  →  處理 (運算)  →  輸出 (printf)
```

```c
int a, b;
scanf("%d %d", &a, &b);   // 1. 讀入
int sum = a + b;          // 2. 處理
printf("%d\n", sum);      // 3. 輸出
```

---

# 四大地雷 💣

1. **scanf 忘了 `&`** → 程式當掉
2. **型態配錯**：`%d` 配小數、`%f` 配整數 → 亂碼
3. **整數除法**：`5 / 2 == 2`，不是 2.5！（下堂詳談）
4. **char 用雙引號**：`char c = "A";` ❌

---

# 動手做 ①：P5703 蘋果採購

🔴 [P5703 蘋果採購](https://www.luogu.com.cn/problem/P5703)

最標準的三段式：讀入兩數 → 相乘 → 輸出

```c
#include <stdio.h>
int main() {
    int x, y;
    // 讀入兩個整數（記得 &）
    // 算出乘積
    // 印出來
    return 0;
}
```

> 照三段式自己把它完成 💪

---

# 動手做 ②：P5708 三角形面積

🔴 [P5708 三角形面積](https://www.luogu.com.cn/problem/P5708)

- 用 `double` 處理小數
- 需要 `#include <math.h>` 裡的 `sqrt`（開根號）
- 用 `%.1f` 控制輸出格式

> 重點：浮點數 + 函式庫初體驗

---

# 今天的作業 📝

- 🔴 [P5703 蘋果採購](https://www.luogu.com.cn/problem/P5703)
- 🔴 [P5706 再分肥宅水](https://www.luogu.com.cn/problem/P5706)
- 🔴 [P5708 三角形面積](https://www.luogu.com.cn/problem/P5708)
- 🔴 [P1425 小魚的游泳時間](https://www.luogu.com.cn/problem/P1425)
- 🟠 [P5709 Apples Prologue](https://www.luogu.com.cn/problem/P5709)
- 🟠 [P5707 上學遲到](https://www.luogu.com.cn/problem/P5707)

---

<!-- _class: lead -->
# 下課前自我檢查 ✅

- [ ] 我能宣告 `int`、`float`、`char`
- [ ] 我知道 `%d` `%f` `%c` 各配什麼
- [ ] 我的 `scanf` 不會忘記 `&`
- [ ] 我能自己完成一題「讀入→計算→輸出」

**下堂預告：運算子與運算式（含整數除法陷阱）**
