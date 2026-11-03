---
marp: true
theme: default
paginate: true
header: 'C 語言 第 6 堂'
footer: '迴圈 (一)：while / do-while'
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
# C 語言 第 6 堂

## 迴圈：while / do-while

讓程式「重複做事」🔁

---

# 今天要學會

1. 為什麼需要迴圈
2. `while` 迴圈
3. **迴圈三要素**
4. `do-while`：先做再判斷
5. 累加器模式

---

# 為什麼需要迴圈？

印 1 到 100 ⋯⋯ 寫 100 行 `printf`？😵

迴圈 = 把「重複的事」交給電腦做

---

# while 迴圈

```c
int i = 1;          // ① 初始值
while (i <= 5) {    // ② 條件
    printf("%d ", i);
    i++;            // ③ 更新
}
// 1 2 3 4 5
```

---

# 迴圈三要素（缺一不可）

1. **初始值** `i = 1`
2. **條件** `i <= 5`（真才繼續）
3. **更新** `i++`（每圈改變，才會停）

> 💡 寫迴圈先問：**i 會變嗎？會停嗎？**
> 忘了更新 → 無窮迴圈，程式卡死！

---

# do-while：先做再判斷

```c
int i = 10;
do {
    printf("%d ", i);   // 至少做一次
} while (i <= 5);
// 輸出：10
```

| | 至少做幾次 |
|--|--|
| `while` | 可能 0 次 |
| `do-while` | **至少 1 次** |

---

# 累加器（超常用！）

```c
int sum = 0, i = 1;
while (i <= 100) {
    sum += i;    // sum = sum + i
    i++;
}
printf("%d\n", sum);   // 5050
```

> ⚠️ 累加器記得**先歸零** `sum = 0`

---

# 四大地雷 💣

1. **忘記 `i++`** → 無窮迴圈
2. **邊界錯**：`i < 5` vs `i <= 5`
3. **累加器沒歸零**
4. **`while(...);`** 多分號 → 卡死

---

# 動手做：P5722 / P5723

🔴 [P5722 數列求和](https://www.luogu.com.cn/problem/P5722)
→ 算 1+2+⋯+n（累加器標準題）

🔴 [P5723 質數口袋](https://www.luogu.com.cn/problem/P5723)
→ 一直裝質數直到超過上限

---

# 今天的作業 📝

- 🔴 [P5722 數列求和](https://www.luogu.com.cn/problem/P5722)
- 🔴 [P5723 質數口袋](https://www.luogu.com.cn/problem/P5723)
- 🔴 [P1424 小魚的航程](https://www.luogu.com.cn/problem/P1424)
- 🔴 [P1909 買鉛筆](https://www.luogu.com.cn/problem/P1909)
- 🟠 [P1035 級數求和](https://www.luogu.com.cn/problem/P1035)
- 🟠 [P1031 均分紙牌](https://www.luogu.com.cn/problem/P1031)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我能說出迴圈三要素
- [ ] 我能用 while 印 1 到 n
- [ ] 我會用累加器算總和
- [ ] 我寫迴圈會檢查「會不會停」

**下堂預告：for 迴圈與巢狀迴圈**
