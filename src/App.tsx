import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { StoreSample } from './components/StoreSample'
import { ReactReduxSample } from './components/ReactReduxSample'

// Redux Dev Tools を利用するためのパッケージ
import { devToolsEnhancer } from 'redux-devtools-extension';

// store を作成するcreateStore をインポート
import { createStore } from 'redux'

// reducer を取りまとめてあるallReducers をインポート
import { allReducers } from './reducers'

import { Provider as ReduxProvider } from 'react-redux';

// 作成したreducerを渡してcreateStore を実行し、state を保持したstore を作成する
const storeFromRawRedux = createStore(
  allReducers,
  undefined, // middleware があれば、第2引数でapplyMiddleware() で指定する
  devToolsEnhancer({}) // Redux dev tools を利用するための設定
);


export const App = () => {

  return (
    <>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to={`/react-redux-sample`}>react-redux-sample</Link></li>
            <li>
              <Link to={`/store-sample`}>store-sample</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path={`/react-redux-sample`} element={
            <ReduxProvider store={storeFromRawRedux}>
              <ReactReduxSample></ReactReduxSample>
            </ReduxProvider>
          } />
          <Route path={`/store-sample`} element={<StoreSample></StoreSample>} />
        </Routes>
        <div className="App">
        </div>
      </BrowserRouter>
    </>
  )
}
