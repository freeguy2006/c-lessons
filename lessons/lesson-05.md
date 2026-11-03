---
marp: true
theme: default
paginate: true
header: 'C 語言 第 5 堂'
footer: '分支 (二)：多重分支與 switch'
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
# C 語言 第 5 堂

## 多重分支與 switch

處理「兩種以上情況」的分類 🗂️

---

# 今天要學會

1. `else if` 階梯：多選一
2. `switch-case`：固定值分類
3. `break` 的貫穿陷阱
4. if 和 switch 怎麼選

---

# else-if 階梯（成績分等級）

```c
if (score >= 90)      printf("A\n");
else if (score >= 80) printf("B\n");
else if (score >= 60) printf("C\n");
else                  printf("F\n");
```

> 由上往下，**第一個成立的就執行**，其餘跳過
> ⚠️ 順序要「從嚴到寬」：先 90 再 80

---

# ⚠️ 順序錯了會怎樣？

```c
if (score >= 60)      printf("C\n");   // ❌
else if (score >= 90) printf("A\n");
```

90 分的人 → 先撞到 `>= 60` → 拿到 C！

> 永遠把**最嚴格的條件寫最前面**

---

# switch-case（固定值分類）

```c
switch (choice) {
    case 1:
        printf("一\n");
        break;        // 不寫會貫穿！
    case 2:
        printf("二\n");
        break;
    default:
        printf("其他\n");
}
```

---

# ⚠️ break 貫穿陷阱

```c
switch (x) {
    case 1:
        printf("1");   // 沒 break
    case 2:
        printf("2");   // 一路印下來
}
// x=1 → 輸出 "12"
```

> 初學者：**每個 case 都加 break**

---

# if vs switch

| 情況 | 用 |
|------|-----|
| 範圍（區間、>= <） | `else-if` |
| 等於某幾個固定值 | `switch` |

> switch **不能**判斷範圍！
> `case score >= 90` 是錯的

---

# 動手做：P5716 / P5715

🔴 [P5716 月份天數](https://www.luogu.com.cn/problem/P5716)
→ 依月份印天數（複習閏年 2 月）

🔴 [P5715 三位數排序](https://www.luogu.com.cn/problem/P5715)
→ 三數由小到大，多重 if 比較

---

# 今天的作業 📝

- 🔴 [P5715 三位數排序](https://www.luogu.com.cn/problem/P5715)
- 🔴 [P5716 月份天數](https://www.luogu.com.cn/problem/P5716)
- 🔴 [P1089 津津的儲蓄計劃](https://www.luogu.com.cn/problem/P1089)
- 🔴 [P1046 陶陶摘蘋果](https://www.luogu.com.cn/problem/P1046)
- 🟠 [P1888 三角函數](https://www.luogu.com.cn/problem/P1888)
- 🟠 [P4414 ABC](https://www.luogu.com.cn/problem/P4414)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我會用 else-if 階梯分等級
- [ ] 我知道順序要從嚴到寬
- [ ] switch 每個 case 都加 break
- [ ] 我知道 switch 不能判斷範圍

**下堂預告：迴圈 while / do-while**
