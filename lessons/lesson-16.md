---
marp: true
theme: default
paginate: true
header: 'C 語言 第 16 堂 ｜ APCS 演算法'
footer: '時間複雜度與枚舉/模擬'
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
# 第 16 堂　APCS 演算法

## 時間複雜度與枚舉/模擬

判斷「會不會太慢」+ 暴力解題 ⏱️

---

# 今天要學會

1. 時間複雜度 Big-O 直覺
2. 怎麼判斷「能不能暴力」
3. 枚舉法
4. 模擬題拆解技巧

---

# 複雜度 = 資料變大時算幾次

看「迴圈跑幾層」就好，不用背公式：

| 寫法 | 次數 | Big-O |
|------|------|-------|
| 沒迴圈 | 固定 | O(1) |
| 一層 | n | O(n) |
| 兩層巢狀 | n² | O(n²) |
| 每次砍一半 | log n | O(log n) |
| 排序 | n log n | O(n log n) |

---

# 關鍵門檻：1 秒約 10⁸ 次

```
n ≤ 1000   → O(n²) 沒問題
n ≤ 10⁵    → O(n²) 會炸！要 O(n log n)
n ≤ 10⁶    → 要 O(n)
```

> ⚠️ 看到大 n 還用兩層巢狀 → TLE（超時）

---

# 先看資料範圍，再決定解法

| n 的範圍 | 可接受的解法 |
|----------|--------------|
| n ≤ 20 | 枚舉子集 O(2ⁿ)、排列 O(n!) |
| n ≤ 2000 | O(n²) |
| n ≤ 10⁵ | O(n log n) |
| n ≤ 10⁶ | O(n) |

> 💡 APCS 解題第一步：**先看 n 多大**

---

# 枚舉法：全部試一遍

「把所有可能都試過，挑符合的」

```c
// 1~100 裡同時被 3、5 整除的數
for (int i = 1; i <= 100; i++)
    if (i % 3 == 0 && i % 5 == 0)
        printf("%d ", i);
```

---

# 模擬題：照規則一步步做

不需要聰明演算法，重點是**把規則翻成程式**

1. 把規則拆成幾個步驟
2. 用變數/陣列記錄狀態
3. 一步步更新，**小心邊界**

> 邊界：第一個、最後一個、繞圈（環狀）

---

# 四大地雷 💣

1. **沒看範圍就暴力** → 大 n 直接 TLE
2. **規則沒讀清楚** → 漏掉一種情況
3. **邊界沒顧**（環狀、頭尾）
4. **以為複雜度看程式長度**（其實看迴圈次數）

---

# 動手做（APCS 真題）

🟦 [b964 成績指標](https://zerojudge.tw/ShowProblem?problemid=b964)
→ 枚舉 + 邊界（APCS 第 1 題典型）

🟦 [b965 矩陣轉換](https://zerojudge.tw/ShowProblem?problemid=b965)
→ 二維陣列模擬翻轉/旋轉

---

# 今天的作業 📝

**ZeroJudge（APCS 真題）🟦**
- [b964 成績指標](https://zerojudge.tw/ShowProblem?problemid=b964)
- [b965 矩陣轉換](https://zerojudge.tw/ShowProblem?problemid=b965)
- [c292 數字龍捲風](https://zerojudge.tw/ShowProblem?problemid=c292)

**洛谷 🟩**
- [P2241 統計方形](https://www.luogu.com.cn/problem/P2241)
- [P1003 鋪地毯](https://www.luogu.com.cn/problem/P1003)
- [P1067 多項式輸出](https://www.luogu.com.cn/problem/P1067)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我能估出 O(n)、O(n²)、O(log n)
- [ ] 看資料範圍能判斷能不能暴力
- [ ] 我會用枚舉法
- [ ] 我能拆解模擬題並顧好邊界

**下堂預告：排序演算法 + STL sort**
