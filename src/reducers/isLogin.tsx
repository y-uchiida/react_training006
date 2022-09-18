import { Reducer } from "redux";
import { Action } from "redux";

const isLoginReducer = () => (state = false, action: Action) => {
	switch (action.type) {
		case 'LOGIN':
			return !state;
		default: // default で、現在の値をそのまま返す
			return state;
	}
};

export default isLoginReducer;
