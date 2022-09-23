import React from 'react'
import { useDispatch } from 'react-redux'
import { ClearCartModalSlice } from '../stores/ClearCart'
import { ShoppingCartSlice } from '../stores/ShoppingCart'

export const ClearCartModal = () => {
	const dispatch = useDispatch();
	const { clearCart } = ShoppingCartSlice.actions;
	const { openClearCartModal, closeClearCartModal } = ClearCartModalSlice.actions;

	return (
		<div className='modal-container' onClick={() => dispatch(closeClearCartModal())}>
			<div className='modal' onClick={(e) => e.stopPropagation()}>
				<h4>お買い物かごを空にしますか？</h4>
				<div className='btn-container'>
					<button className='btn confirm-btn'
						onClick={() => {
							dispatch(clearCart());
							dispatch(closeClearCartModal())
						}}
					>OK</button>
					<button className='btn clear-btn' onClick={() => dispatch(closeClearCartModal())}>キャンセル</button>
				</div>
			</div>
		</div>
	)
}
