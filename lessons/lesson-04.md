---
marp: true
theme: default
paginate: true
header: 'C 語言 第 4 堂'
footer: '分支 (一)：if / if-else'
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
# C 語言 第 4 堂

## 分支：if / if-else

讓程式學會「看情況做不同的事」🔀

---

# 今天要學會

1. `if` 單分支：成立才做
2. `if-else` 雙分支：二選一
3. 大括號 `{ }` 的重要性
4. 避開 `=` vs `==`、多餘分號的坑

---

# if 單分支

```c
if (score >= 60) {
    printf("及格\n");
}
```

- 條件**為真** → 執行 `{ }` 裡面
- 條件**為假** → 整段跳過

---

# if-else 雙分支

```c
if (score >= 60) {
    printf("及格\n");
} else {
    printf("不及格\n");
}
```

> 「二選一」：一定會執行其中一塊

---

# ⚠️ 一定要加大括號

```c
if (x > 0)
    printf("正數\n");     // 只有這行受控制
    printf("總是印\n");   // 這行其實一定會印！
```

✅ 好習慣：永遠加 `{ }`

```c
if (x > 0) {
    printf("正數\n");
}
```

---

# 條件怎麼寫（複習上週）

```c
if (age >= 18 && age <= 65) { }  // 而且
if (n % 2 == 0) { }              // 偶數
if (x != 0) { }                  // 不等於
```

---

# 三大地雷 💣

1. **`if (x = 5)`** → 要用 `==`，否則永遠成立
2. **`if (x > 0);`** → 多一個分號，`{ }` 變空殼
3. **忘了大括號** → 只有第一行受控制

> 前兩個編譯器不會報錯，最難抓！

---

# 動手做：P5712 / P1422

🔴 [P5712 Apples](https://www.luogu.com.cn/problem/P5712)
→ 數量是 1 印 `apple`，否則印 `apples`（最單純 if-else）

🔴 [P1422 小玉家的電費](https://www.luogu.com.cn/problem/P1422)
→ 用電量落在不同區間，費率不同（分段計算）

---

# 今天的作業 📝

- 🔴 [P5711 閏年判斷](https://www.luogu.com.cn/problem/P5711)
- 🔴 [P5712 Apples](https://www.luogu.com.cn/problem/P5712)
- 🔴 [P5713 洛谷團隊系統](https://www.luogu.com.cn/problem/P5713)
- 🔴 [P1422 小玉家的電費](https://www.luogu.com.cn/problem/P1422)
- 🟠 [P1085 不高興的津津](https://www.luogu.com.cn/problem/P1085)
- 🟠 [P5714 男孩女孩](https://www.luogu.com.cn/problem/P5714)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我會寫 if 和 if-else
- [ ] 我永遠加大括號 `{ }`
- [ ] 條件用 `==` 不用 `=`
- [ ] 我知道 `if(...);` 是大坑

**下堂預告：多重分支與 switch**
