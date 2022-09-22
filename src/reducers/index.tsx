// reducer をまとめる処理の型をインポート
import { combineReducers } from "redux";

import { counterReducer, initialCounter } from "./counter";
import { isLoginReducer, initialIsLogin } from "./isLogin";


// reducer を取りまとめて返す
export const allReducers = combineReducers({
	counter: counterReducer,
	isLogin: isLoginReducer
});

// 初期値を設定
export const initialState: ReactReduxSampleStates = {
	...initialCounter,
	...initialIsLogin
}
