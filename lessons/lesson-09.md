---
marp: true
theme: default
paginate: true
header: 'C 語言 第 9 堂'
footer: '二維陣列'
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
# C 語言 第 9 堂

## 二維陣列

處理表格、矩陣、棋盤 🔲

---

# 今天要學會

1. 二維陣列 = 表格（列 × 行）
2. 用 `a[i][j]` 存取
3. 雙層 for 走訪整張表
4. 周圍計數（棋盤類）

---

# 二維陣列 = 表格

一維 = 一排盒子
二維 = 一個方格表（像 Excel）

```c
int a[3][4];   // 3 列 4 行，共 12 格
a[0][0] = 1;   // 左上角
a[2][3] = 9;   // 右下角
```

> `a[i][j]`：第 i 列、第 j 行（都從 0 開始）

---

# 初始化

```c
int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
printf("%d\n", m[1][2]);   // 6
```

---

# 雙層迴圈走訪（核心）

```c
for (int i = 0; i < n; i++) {       // 列
    for (int j = 0; j < m; j++) {   // 行
        printf("%d ", a[i][j]);
    }
    printf("\n");                   // 每列換行
}
```

> 口訣：**外層走列、內層走行**
> 換行放在**外層迴圈尾巴**

---

# 周圍計數（掃雷常用）

看 `a[i][j]` 的上下左右：

```
a[i-1][j]   上
a[i+1][j]   下
a[i][j-1]   左
a[i][j+1]   右
```

> ⚠️ `i-1` 可能變 -1 → 先檢查邊界！

---

# 四大地雷 💣

1. **行列搞反**：i 是列、j 是行
2. **越界**：看周圍時超出邊界
3. **內外層變數混用**
4. **換行放錯位置**（要在外層內、內層後）

---

# 動手做：P5731 / P2670

🔴 [P5731 蛇形方陣](https://www.luogu.com.cn/problem/P5731)
→ 把 1~n² 蛇形填進方陣

🔴 [P2670 掃雷遊戲](https://www.luogu.com.cn/problem/P2670)
→ 算每格周圍幾顆雷（注意邊界）

---

# 今天的作業 📝

- 🔴 [P5731 蛇形方陣](https://www.luogu.com.cn/problem/P5731)
- 🔴 [P5730 顯示屏](https://www.luogu.com.cn/problem/P5730)
- 🔴 [P2670 掃雷遊戲](https://www.luogu.com.cn/problem/P2670)
- 🔴 [P1789 光棍節快樂](https://www.luogu.com.cn/problem/P1789)
- 🟠 [P1116 車廂重組](https://www.luogu.com.cn/problem/P1116)
- 🟠 [P1003 鋪地毯](https://www.luogu.com.cn/problem/P1003)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我知道 i 是列、j 是行（從 0 開始）
- [ ] 我能用雙層 for 讀入/印出矩陣
- [ ] 我換行放對位置
- [ ] 看周圍會檢查邊界

**下堂預告：字元與字串**
