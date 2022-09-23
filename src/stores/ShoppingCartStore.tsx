import { configureStore } from "@reduxjs/toolkit";
import { ClearCartModalSlice } from "./ClearCart";
import { ShoppingCartSlice, ShoppingCartState } from "./ShoppingCart";
import { ClearCartModalState } from "./ClearCart";

export interface shoppingCartStore {
	shoppingCart: ShoppingCartState,
	clearCartModal: ClearCartModalState,
};

export const shoppingCartStore = configureStore({
	reducer: {
		shoppingCart: ShoppingCartSlice.reducer,
		clearCartModal: ClearCartModalSlice.reducer,
	}
});
