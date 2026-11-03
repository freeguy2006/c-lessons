---
marp: true
theme: default
paginate: true
header: 'C 語言 第 7 堂'
footer: '迴圈 (二)：for 與巢狀迴圈'
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
# C 語言 第 7 堂

## for 與巢狀迴圈

把迴圈寫得更緊湊、處理表格與圖形 🔢

---

# 今天要學會

1. `for` 迴圈：三要素寫一行
2. 巢狀迴圈：迴圈裡放迴圈
3. `break`：跳出整個迴圈
4. `continue`：跳過這一圈

---

# for 迴圈

```c
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// 1 2 3 4 5
```

`for (初始值; 條件; 更新)`
→ 上週的三要素，**集中在一行**

> 次數固定時，for 比 while 更清楚

---

# 巢狀迴圈：九九乘法表

```c
for (int i = 1; i <= 9; i++) {       // 外層
    for (int j = 1; j <= 9; j++) {   // 內層
        printf("%d*%d=%-3d ", i, j, i*j);
    }
    printf("\n");                    // 每列換行
}
```

> 外層跑一圈，內層整個跑完一輪（9×9=81 次）

---

# 巢狀經典：印三角形

```c
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {  // 次數隨外層變
        printf("*");
    }
    printf("\n");
}
```

```
*
**
***
****
*****
```

---

# break：跳出整個迴圈

```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    printf("%d ", i);    // 1 2 3 4
}
```

# continue：跳過這一圈

```c
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    printf("%d ", i);    // 1 2 4 5
}
```

---

# 四大地雷 💣

1. **內外層用同一個變數** → 用 `i` / `j` 分開
2. **巢狀忘了內層換行** → 擠成一行
3. **break / continue 搞混**
4. **for 的分號寫成逗號**

---

# 動手做：P5725 / P1980

🔴 [P5725 求三角形](https://www.luogu.com.cn/problem/P5725)
→ 用數字排方陣 / 三角形（巢狀 + 格式）

🔴 [P1980 計數問題](https://www.luogu.com.cn/problem/P1980)
→ 數 1~n 裡某數字出現幾次（for + 拆位）

---

# 今天的作業 📝

- 🔴 [P5724 最大跨度值](https://www.luogu.com.cn/problem/P5724)
- 🔴 [P5725 求三角形](https://www.luogu.com.cn/problem/P5725)
- 🔴 [P1980 計數問題](https://www.luogu.com.cn/problem/P1980)
- 🔴 [P1035 級數求和](https://www.luogu.com.cn/problem/P1035)
- 🟠 [P1217 迴文質數](https://www.luogu.com.cn/problem/P1217)
- 🟠 [P2241 統計方形](https://www.luogu.com.cn/problem/P2241)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我會用 for 印 1 到 n
- [ ] 我會寫九九乘法表
- [ ] 我會印三角形圖案
- [ ] 我知道 break vs continue

**下堂預告：一維陣列**
