import React from 'react'

// redux のStore(stateを集積管理するためのいれもの)を生成するcreateStore をインポート
import { createStore } from 'redux';

// storeの内部で、dispatchされたactionの種類によってstateの値を変化させる処理の型 reducer をインポート
import { Reducer } from 'redux';

// actions -> increment, decrement
const increment = () => {
	return {
		type: "INCREMENT", // action名
	}
}

const decrement = () => {
	return {
		type: "DECREMENT", // action名
	}
}

// reducer: 前の状態と変更内容を組み合わせて新しいstateを作る処理
const counterReducer: Reducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
	}
};

// store
let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

//dispatch: イベントハンドラを通じて、actionの発生をStoreに通知する
store.dispatch(increment()); // 初期値 0 -> 1
store.dispatch(increment()); // 元の値 1 -> 2

store.dispatch(decrement()); // 元の値 2 -> 1
store.dispatch(decrement()); // 元の値 1 -> 0


export const StoreSample = () => {
	return (
		<div>
			<h1>Store Sample</h1>
		</div>
	)
}
