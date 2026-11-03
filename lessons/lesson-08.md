---
marp: true
theme: default
paginate: true
header: 'C 語言 第 8 堂'
footer: '一維陣列'
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
# C 語言 第 8 堂

## 一維陣列

一次處理「一整串」資料 📚

---

# 今天要學會

1. 為什麼需要陣列
2. 宣告、初始化、用索引存取
3. 用 for 走訪整個陣列
4. 加總、找最大、反向輸出

---

# 為什麼需要陣列？

存 5 個分數 → `s1,s2,s3,s4,s5`？
存 100 個呢？😵

> 陣列 = 一排連號的盒子
> 用**同一個名字 + 編號**存取

---

# 宣告與存取

```c
int a[5];                  // a[0] ~ a[4]
a[0] = 10;                 // 第 1 個
a[4] = 50;                 // 最後一個

int b[5] = {3, 1, 4, 1, 5};
printf("%d\n", b[2]);      // 4
```

> ⚠️ **索引從 0 開始**
> 長度 5 → 合法是 0~4，`a[5]` 已越界！

---

# 用 for 走訪（核心技能）

```c
int n, a[100];
scanf("%d", &n);
for (int i = 0; i < n; i++)   // 讀入
    scanf("%d", &a[i]);

for (int i = 0; i < n; i++)   // 印出
    printf("%d ", a[i]);
```

---

# 常見三招

**加總**
```c
int sum = 0;
for (int i = 0; i < n; i++) sum += a[i];
```

**找最大值**（初始值設 a[0]！）
```c
int max = a[0];
for (int i = 1; i < n; i++)
    if (a[i] > max) max = a[i];
```

**反向輸出**
```c
for (int i = n-1; i >= 0; i--) printf("%d ", a[i]);
```

---

# 四大地雷 💣

1. **索引越界** `a[5]`（長度只有 5）
2. **邊界寫 `i <= n`** → 多跑一格
3. **找最大初始值設 0** → 全負數會錯
4. **陣列開太小** → 題目上限 +5 開好開滿

---

# 動手做：P1427 / P1428

🔴 [P1427 小魚的數字遊戲](https://www.luogu.com.cn/problem/P1427)
→ 讀一串數字，反向輸出

🔴 [P1428 小魚比可愛](https://www.luogu.com.cn/problem/P1428)
→ 每個數左邊有幾個比它小（雙層走訪）

---

# 今天的作業 📝

- 🔴 [P1427 小魚的數字遊戲](https://www.luogu.com.cn/problem/P1427)
- 🔴 [P1428 小魚比可愛](https://www.luogu.com.cn/problem/P1428)
- 🔴 [P5727 冰雹猜想](https://www.luogu.com.cn/problem/P5727)
- 🔴 [P2141 珠心算測驗](https://www.luogu.com.cn/problem/P2141)
- 🟠 [P1047 校門外的樹](https://www.luogu.com.cn/problem/P1047)
- 🟠 [P5728 旗鼓相當的對手](https://www.luogu.com.cn/problem/P5728)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我知道索引從 0 開始
- [ ] 我能用 for 讀入/印出陣列
- [ ] 我能算總和、找最大值
- [ ] 我知道越界很危險

**下堂預告：二維陣列**
