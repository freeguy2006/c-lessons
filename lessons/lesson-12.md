---
marp: true
theme: default
paginate: true
header: 'C 語言 第 12 堂'
footer: '函式 (二)：遞迴與作用域'
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
# C 語言 第 12 堂

## 遞迴與作用域

函式呼叫自己 🔁🪞

---

# 今天要學會

1. 遞迴：把大問題化成小問題
2. 遞迴兩要素：終止條件 + 遞迴關係
3. 區域變數 vs 全域變數
4. 遞迴的風險

---

# 遞迴 = 函式呼叫自己

階乘：`n! = n × (n-1)!`
定義裡又出現階乘 → 適合遞迴

```c
int factorial(int n) {
    if (n == 0) return 1;          // ① 終止條件
    return n * factorial(n - 1);   // ② 遞迴關係
}
```

---

# 遞迴怎麼跑的？

```
factorial(3)
= 3 × factorial(2)
= 3 × 2 × factorial(1)
= 3 × 2 × 1 × factorial(0)
= 3 × 2 × 1 × 1 = 6
```

> 一路展開到最小情況，再一層層收回來

---

# 遞迴兩要素（缺一就爆）

1. **終止條件**：什麼時候停
   `if (n == 0) return 1;`

2. **遞迴關係**：用「更小的問題」組答案
   `return n * factorial(n-1);`

> ⚠️ 沒有終止條件 → 無限呼叫，程式爆掉！

---

# 費氏數列

```c
int fib(int n) {
    if (n <= 2) return 1;            // 終止
    return fib(n-1) + fib(n-2);      // 遞迴
}
```

> 1, 1, 2, 3, 5, 8, 13, ...

---

# 區域 vs 全域變數

```c
int g = 10;          // 全域：大家都看得到

void f() {
    int x = 5;       // 區域：只活在 f 裡
    printf("%d\n", g);   // 可用全域 g
}
// 出了 f，x 就消失了
```

- **區域**：`{ }` 裡宣告，出去就沒了
- **全域**：函式外宣告（但少用，易亂）

---

# 遞迴的風險 ⚠️

1. **沒終止條件** → 無限遞迴、爆掉
2. **重複計算太多** → `fib(40)` 很慢

> 初學先理解概念，效率之後再談

---

# 動手做：P1255 / P5739

🔴 [P1255 數樓梯](https://www.luogu.com.cn/problem/P1255)
→ 一次走 1 或 2 階（就是費氏數列！）

🔴 [P5739 計算階乘](https://www.luogu.com.cn/problem/P5739)
→ 把迴圈版改寫成遞迴版

---

# 今天的作業 📝

- 🔴 [P5739 計算階乘](https://www.luogu.com.cn/problem/P5739)
- 🔴 [P1255 數樓梯](https://www.luogu.com.cn/problem/P1255)
- 🔴 [P1009 階乘之和](https://www.luogu.com.cn/problem/P1009)
- 🔴 [P1028 數的計算](https://www.luogu.com.cn/problem/P1028)
- 🟠 [P1044 棧](https://www.luogu.com.cn/problem/P1044)
- 🟠 [P1990 覆蓋牆壁](https://www.luogu.com.cn/problem/P1990)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我能說出遞迴兩要素
- [ ] 我能寫階乘/費氏的遞迴版
- [ ] 我知道沒終止會無限遞迴
- [ ] 我能分辨區域 vs 全域變數

**下堂預告：指標入門**
