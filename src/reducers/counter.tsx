import { Reducer } from "redux";
import { Action } from "redux";

const counterReducer = () => (state = 0, action: Action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default: // default で、現在の値をそのまま返す
			return state;
	}
};

export default counterReducer;
