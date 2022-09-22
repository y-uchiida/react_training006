import { Reducer } from "redux";

export const CounterActions = {
	DECREMENT: 'DECREMENT',
	INCREMENT: 'INCREMENT',
} as const;

type ValueOf<T> = T[keyof T];

export interface CounterAction {
	type: ValueOf<typeof CounterActions>,
	amount?: number,
};

export const decrement = (): CounterAction => ({
	type: CounterActions.DECREMENT,
});

export const increment = (): CounterAction => ({
	type: CounterActions.INCREMENT,
});

export interface counterState {
	counter: number;
};

export const initialCounter: counterState = {
	counter: 0
};

export const counterReducer: Reducer<number, CounterAction> = (
	state = initialCounter.counter,
	action
) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default: { // default で、現在の値をそのまま返す
			const _: never = action.type;
			return state;
		}
	}
};
