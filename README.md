# sat-interview

> ## 環境設置

   - VSCode
   - **ESLint**
   - Prettier

> ## 安裝

### 取得專案

```javascript
git clone https://github.com/s10614165/sat-InterView.git
```

### 移動到專案內

```javascript
cd .\sat-InterView\
```

### 安裝套件

```javascript
npm install -g pnpm //若已經安裝 pnpm 可略過
```

```javascript
pnpm install  // 或使用 npm install
```

### 開啟專案

```javascript
pnpm run dev // 或使用 npm run dev
```

### 資料夾說明

   - components - 放置拆分各功能 component
   - assets - 靜態資源放置處

### 專案技術

   - **Nodejs :** v16.17.0
   - React  v18.0.28
   - Vite v4.2.0
   - Tailwindcss v3.3.1
   - Tailwind-scrollbar v3.0.0
   - prettier v2.8.7
   - eslint-config-airbnb v19.0.4

> ## 各元件功能

### Progressbar :

顯示進度條，計算出已完成 Todo 的百分比。

### ToggleSwitch :

開啟時 :可以使 Todo 順序改變，已完成的 Todo 會移動至下方，若有多個已完成的 Todo ，則按照時間排序

關閉時(預設) :按照 Todo 建立時間排序。

### TodoInput :

輸入 Todo 的  Input 元件 ，按下  +  或 按下 Enter 鍵皆可以新增 Todo。

### TodoItem :

為 Todo 的整體區塊。

### Todo :

顯示各 Todo 的元件。

功能包括:

   - 修改 Todo 是否完成
   - 刪除 Todo
   - 修改 Todo 內容

> ## 可優化功能

### 重構使用 useReducer  來撰寫  :

在 Todo 的 CRUD 中 ，使用 useReducer 來統一管理邏輯 ，降低元件的複雜度。

### 使用 localStorage 將 Todo 進行存取 :

目前 Todo 內容無法保存，使用 localStorage  將內容保存下來。

> ## 開發困境

### Progressbar :

第一次實作進度條元件，在撰寫的過程查詢許多方法，讓呈現樣式與實際已完成數字相符合。

### ToggleSwitch :

第一次實作切換開關，更了解如何搭配開關狀態，按照條件排序 Todo 的方法。

### ScrollBar :

如何在新增 Todo 時，如何使 scrollbar 降至最底，花了不少時間來找尋解決方法，最終在

`.scrollIntoView({ behavior: 'smooth' })`  中找到答案。

> ## 結語

感謝 工智聯科技股份有限公司，給予我此次面試測驗的機會，在開發困境上的問題，都給我新的知識與經驗，此次不足的地方，會去更加了解如何使用，以及運作方式。

期望有機會能參與面試 ，謝謝!