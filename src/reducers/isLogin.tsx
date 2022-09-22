import { Reducer } from "redux";

export const IsLoginActions = {
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
} as const;

type ValueOf<T> = T[keyof T];

export interface IsLoginAction {
	type: ValueOf<typeof IsLoginActions>,
}

export const login = (): IsLoginAction => ({
	type: IsLoginActions.LOGIN,
});

export const logout = (): IsLoginAction => ({
	type: IsLoginActions.LOGOUT,
});

export interface isLoginState {
	isLogin: boolean
};

export const initialIsLogin: isLoginState = {
	isLogin: false,
}

export const isLoginReducer: Reducer<boolean, IsLoginAction> = (
	state = initialIsLogin.isLogin,
	action,
) => {
	switch (action.type) {
		case 'LOGIN':
			return true;
		case 'LOGOUT':
			return false;
		default: { // default で、現在の値をそのまま返す
			const _: never = action.type;
			return state;
		}
	}
};
