# 数字の桁区切り in javascript
## やっていること

数字（int）を三桁ずつカンマで区切った文字列（str）に変換する  
つまり、

```js
var num = 12345;
num.toLocaleString(); // return '12,345'
```

しかし`Number.prototype.toLocaleString()`はInternetExproler、Edgeにおいて実装後のバージョンも不具合がある。（なぜ？？）
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

## 解決策

### 文字列に変換して処理をする
- `./js/thousand-separator.js`が実行ファイル
- `String.prototype.substring()`を使う  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substring

- 再帰関数を用いて3桁づつに区切る。
- IEの対応バージョンが3以降でこっちのほうが良さげ

### 正規表現を使う
- `./js/thousand-separator-regex.js`が実行ファイル
- `String.prototype.replace()`を使う  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace

- 正規表現で置換する。
- ブラウザによって正規表現の動作が異なるパターンがありそう。

## テスト
- `./spec`配下に配置
- [testem](https://github.com/testem/testem)とPhantomJS

### 環境構築

- 実行にはGoogleChromeが必要。

``` shell
# package.jsonを元にtestemをインストール
yarn install
# or (npmの人用)
npm install testem
```

### テストの実行

```shell
testem
```

http://localhost:7357/ にアクセスして詳細なテスト結果を確認できる。