import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// REdux Dev Tools を利用するためのパッケージ
import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';

// store を作成するcreateStore をインポート
import { createStore, compose } from 'redux'

// reducer を取りまとめてあるallReducers をインポート
import allReducers from './reducers'


// 作成したreducerを渡してcreateStore を実行し、state を保持したstore を作成する
const store = createStore(
  allReducers,
  // undefined, // middleware があれば、第2引数でapplyMiddleware() で指定する
  devToolsEnhancer({}) // Redux dev tools を利用するための設定
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
