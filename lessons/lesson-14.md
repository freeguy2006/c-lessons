---
marp: true
theme: default
paginate: true
header: 'C 語言 第 14 堂'
footer: '結構 struct'
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
# C 語言 第 14 堂

## 結構 struct

用一個型態描述一個「東西」📦

---

# 今天要學會

1. 為什麼需要結構
2. 定義 struct、存取成員 `.`
3. 結構陣列（一群學生）
4. 結構 + 排序

---

# 為什麼需要結構？

存一個學生：姓名 + 學號 + 分數
→ 分成三個陣列很零散 😩

> struct = 把相關資料**打包成一個自訂型態**

---

# 定義與使用

```c
struct Student {       // 定義新型態
    char name[20];
    int id;
    int score;
};                     // ⚠️ 別忘了分號

struct Student s;
s.id = 101;            // 用 . 存取成員
s.score = 90;
strcpy(s.name, "小明");
```

---

# 結構陣列（一群學生）

```c
struct Student a[100];

for (int i = 0; i < n; i++) {
    scanf("%s %d", a[i].name, &a[i].score);
}
```

> `a[i].score` = 第 i 個學生的分數

---

# 結構 + 排序（依分數）

```c
for (int i = 0; i < n-1; i++)
  for (int j = 0; j < n-1-i; j++)
    if (a[j].score < a[j+1].score) {
        struct Student t = a[j];  // 整個結構一起換！
        a[j] = a[j+1];
        a[j+1] = t;
    }
```

> 分數同就比學號 → if 再加條件

---

# 四大地雷 💣

1. **存取成員忘了 `.`**
2. **定義 struct 忘了分號 `};`**
3. **排序只換 score，沒換整個結構**
4. **字串成員用 `=`**（要用 strcpy）

---

# 動手做：P5740 / P1093

🔴 [P5740 最厲害的學生](https://www.luogu.com.cn/problem/P5740)
→ 用 struct 存學生，找總分最高

🔴 [P1093 獎學金](https://www.luogu.com.cn/problem/P1093)
→ 多關鍵字排序取前 5 名（經典）

---

# 今天的作業 📝

- 🔴 [P5740 最厲害的學生](https://www.luogu.com.cn/problem/P5740)
- 🔴 [P5741 旗鼓相當的對手](https://www.luogu.com.cn/problem/P5741)
- 🔴 [P1781 宇宙總統](https://www.luogu.com.cn/problem/P1781)
- 🔴 [P1093 獎學金](https://www.luogu.com.cn/problem/P1093)
- 🟠 [P1068 分數線劃定](https://www.luogu.com.cn/problem/P1068)

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我能定義 struct 並宣告變數
- [ ] 我用 `.` 存取成員
- [ ] 定義結尾記得分號
- [ ] 我能依成員排序整個結構陣列

**下堂預告：綜合複習 + 小專題**
