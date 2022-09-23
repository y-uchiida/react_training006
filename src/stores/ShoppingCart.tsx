import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

export interface CartItem {
	id: number,
	name: string,
	price: number,
	amount: number,
	img: string,
};

export interface ShoppingCartState {
	cartItems: CartItem[],
};

/* ショッピングカートの初期化 */
const initialState: ShoppingCartState = {
	cartItems: cartItems,
};

export const ShoppingCartSlice = createSlice({
	name: 'ShoppingCart',
	initialState,
	reducers: {
		/* ショッピングカートの商品をすべて削除する */
		clearCart: (state) => {
			state.cartItems = [];
		},

		/* id で指定された商品をショッピングカートから削除する */
		removeItem: (state, action: PayloadAction<number>) => {
			state.cartItems = state.cartItems.filter(item => item.id != action.payload)
		},

		/* id で指定された商品のカート内の個数を一つ増やす */
		increase: (state, action: PayloadAction<number>) => {
			const item = state.cartItems.find(item => item.id === action.payload);
			if (item) {
				item.amount++;
			}
		},

		decrease: (state, action: PayloadAction<number>) => {
			const item = state.cartItems.find(item => item.id === action.payload);
			if (item && item.amount > 0) {
				item.amount--;
			}
		},
	},
});
