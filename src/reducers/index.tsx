// reducer をまとめる処理の型をインポート
import { combineReducers } from "redux";

import counterReducer from "./counter";
import isLoginReducer from "./isLogin";

// reducer を取りまとめて返す
const allReducers = combineReducers({
	counter: counterReducer,
	isLogin: isLoginReducer
});

export default allReducers;
