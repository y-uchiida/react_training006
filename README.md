# react_training006

React と Redux の基本的な使い方を学習しました。
また、React と Redux を利用して、ショッピングカートの動作サンプルを実装しました。

## 開発環境

- Windows 11 (21H2)
- WSL2 Ubuntu20.04
- React 18.2
- Node.js 16.11.1
- vite 3.1.0

## ローカルでの動作の手順

node が利用できる環境に当リポジトリをクローンします  
下記コマンドで依存パッケージをインストールします

```bash
$ npm install
```

下記コマンドで vite のローカルサーバを起動します

```bash
$ npm run dev

> react_trainig006@0.0.0 dev
> vite


  VITE v3.1.0  ready in 381 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

ターミナルに表示された localhost の URL にアクセスすると、トップページが表示されます

## 大変だったこと

Redux ToolKit を使わずに実装した際に、Redux Dev Tools を表示させるためのひと工夫など、いろいろとつまづきがありました。  
動画講義の内容通りに進めていたら学べない点だったので、ちょっと無理して TypeScript での実装にチャレンジしてみてよかったと思います。  
あと、useSelector で store から state を取り出してくるときのオブジェクトの構造などがわからず沼にはまりました...  
store の大枠 -> slice -> 個別の state という構造になっているっぽい、とわかるまで数時間ごちゃごちゃとやってしまいました。

## 参考資料

以下の教材をベースにソースコードを作成しました  
【Redux 完全入門】絶対に理解させる Redux アルゴリズム徹底解説入門パック:  
https://www.udemy.com/course/react-redux-beginner-course/

また、サンプルの実装を TypeScript に書き換える際、以下の書籍の内容を参考にしました
りあクト！ TypeScript で始めるつらくない React 開発 第 4 版【③ React 応用編】:  
https://oukayuka.booth.pm/items/2367992
