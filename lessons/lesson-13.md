---
marp: true
theme: default
paginate: true
header: 'C 語言 第 13 堂'
footer: '指標入門'
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
# C 語言 第 13 堂

## 指標入門

解開兩個謎：`&` 和「函式改不到外面變數」🔑

---

# 今天要學會

1. 變數有「值」也有「位址」
2. `&`（取位址）與 `*`（取值）
3. 指標變數
4. 傳址呼叫：真的改到外面的變數

---

# 比喻：房間與門牌 🏠

- 變數 = 一個房間，裡面放著值
- 位址 = 房間的門牌號碼
- 指標 = 寫著「某房間門牌」的紙條

> 拿著紙條（指標），就能找到房間、改裡面的東西

---

# 值 vs 位址

```c
int a = 5;
printf("%d\n", a);    // 值：5
printf("%p\n", &a);   // 位址：0x7ffe...（門牌）
```

`&a` = 「a 的位址」

> 💡 這就是 scanf 要寫 `&a` 的原因：
> 「把讀到的值放進 a 的房間」

---

# 指標 = 存「位址」的變數

```c
int a = 5;
int *p = &a;          // p 指向 a
printf("%d\n", *p);   // *p = 5（p 指的房間裡的值）
*p = 10;              // 透過 p 改 a
printf("%d\n", a);    // 10！
```

- `&` = 取位址（變數 → 位址）
- `*` = 取值（位址 → 值）

---

# 傳址呼叫：解開第 11 堂的謎

第 11 堂 swap 改不到外面（傳值是複製）
改用**傳位址**：

```c
void swap(int *x, int *y) {
    int t = *x; *x = *y; *y = t;
}
int main() {
    int a = 3, b = 7;
    swap(&a, &b);              // 傳位址
    printf("%d %d\n", a, b);   // 7 3 ✅
}
```

---

# 陣列名其實就是位址

```c
int arr[5];
// arr = 第一個元素的位址
```

> 所以：
> - 傳陣列給函式 → 能改到原陣列
> - `scanf("%s", s)` 不用加 `&`（s 已是位址）

---

# 四大地雷 💣

1. **`&` 和 `*` 搞混**
2. **指標沒指向就用**（野指標，危險）
3. **swap 忘了傳 `&a`**
4. **宣告的 `*` 當成乘法**

---

# 動手做（以小程式為主）

🔧 swap 傳值版（無效）→ 傳址版（成功）
　對比讓你「啊哈！」

🔴 [P1427 小魚的數字遊戲](https://www.luogu.com.cn/problem/P1427)
　試著用指標走訪陣列

---

# 今天的作業 📝

- 🔧 自製 `swap(int*, int*)`、用傳址回傳最大值
- 🔴 [P1427 小魚的數字遊戲](https://www.luogu.com.cn/problem/P1427)
- 🔴 [P1428 小魚比可愛](https://www.luogu.com.cn/problem/P1428)
- 🔴 [P5731 蛇形方陣](https://www.luogu.com.cn/problem/P5731)
- 🟠 自製：同時回傳商和餘數的函式

> 指標重在「理解概念」，不是刷題量

---

<!-- _class: lead -->
# 自我檢查 ✅

- [ ] 我知道 `&a` 是位址、`*p` 是值
- [ ] 我能解釋 scanf 為何加 `&`
- [ ] 我能寫出傳址版 swap
- [ ] 我知道陣列名就是位址

**下堂預告：結構 struct**
