---
marp: true
theme: default
paginate: true
header: 'C 語言 第 11 堂'
footer: '函式 (一)：自訂函式'
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
# C 語言 第 11 堂

## 自訂函式

把程式拆成可重用的小積木 🧩

---

# 今天要學會

1. 為什麼要寫函式
2. 函式三件事：回傳型態、參數、return
3. 定義與呼叫
4. void 函式
5. 「傳值」的迷思

---

# 為什麼要函式？

同一段計算到處貼 → 改一個地方要改全部 😩

> 函式 = 把功能包成「黑盒子」
> 取名字，要用就呼叫

就像數學的 **f(x)**：給輸入 → 得輸出

---

# 函式的基本結構

```c
int add(int a, int b) {   // 回傳型態 名字(參數)
    return a + b;         // 回傳結果
}

int main() {
    int s = add(3, 5);    // 呼叫 → s = 8
    printf("%d\n", s);
}
```

- **回傳型態**：吐出什麼型態
- **參數**：外面餵的輸入
- **return**：把答案送回去

---

# void 函式（只做事、不回傳）

```c
void printLine() {
    printf("------\n");
}

printLine();    // 直接呼叫
```

> `void` = 不回傳東西

---

# 函式寫在哪？

最簡單：**寫在 main 上面**

```c
int square(int x) {
    return x * x;
}
int main() {
    printf("%d\n", square(4));   // 16
}
```

> 寫在 main 後面 → 要先加「函式原型」宣告

---

# ⚠️ 參數是「複製」進去的

```c
void change(int x) { x = 100; }

int main() {
    int a = 5;
    change(a);
    printf("%d\n", a);   // 還是 5！
}
```

> 改的是複製品，動不到外面的 a
> 想真的改 → 第 13 堂「指標」

---

# 四大地雷 💣

1. **忘了 return**
2. **回傳型態寫錯**（要小數卻寫 int）
3. **以為函式能改外面的變數**
4. **定義在後面又沒寫原型**

---

# 動手做：P5739 + 自製函式

🔴 [P5739 計算階乘](https://www.luogu.com.cn/problem/P5739)
→ 寫 `factorial(n)` 算 n!

🔧 自製 `int isPrime(int n)`
→ 包成函式，套用到 [P5723 質數口袋](https://www.luogu.com.cn/problem/P5723)

---

# 今天的作業 📝

- 🔴 [P5739 計算階乘](https://www.luogu.com.cn/problem/P5739)
- 🔴 [P1909 買鉛筆](https://www.luogu.com.cn/problem/P1909)
- 🔴 [P1980 計數問題](https://www.luogu.com.cn/problem/P1980)
- 🔴 [P5740 最厲害的學生](https://www.luogu.com.cn/problem/P5740)
- 🟠 [P1255 數樓梯](https://www.luogu.com.cn/problem/P1255)
- 🟠 [P5741 旗鼓相當的對手](https://www.luogu.com.cn/problem/P5741)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我能定義並呼叫函式
- [ ] 我知道回傳型態/參數/return
- [ ] 我知道 void 不回傳
- [ ] 我知道傳值改的是複製品

**下堂預告：遞迴與變數作用域**
