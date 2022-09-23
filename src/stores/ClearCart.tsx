import { createSlice, isPlainObject } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ClearCartModalState {
	isOpen: boolean
};

/* モーダル開閉状態の初期値設定 */
const initialState: ClearCartModalState = {
	isOpen: false
};

export const ClearCartModalSlice = createSlice({
	name: 'ClearCartModal',
	initialState,
	reducers: {
		openClearCartModal: (state) => { state.isOpen = true },
		closeClearCartModal: (state) => { state.isOpen = false },
	}
});
