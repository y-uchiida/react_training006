import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem as CartItemData } from '../stores/ShoppingCart'
import { shoppingCartStore } from '../stores/ShoppingCartStore';
import { CartItem } from './CartItem';
import { ShoppingCartSlice } from '../stores/ShoppingCart';
import { useDispatch } from 'react-redux';
import { ClearCartModalSlice } from '../stores/ClearCart';

export const CartContainer = () => {
	const cartItems = useSelector<shoppingCartStore, CartItemData[]>((store) => store.shoppingCart.cartItems);
	const { openClearCartModal } = ClearCartModalSlice.actions;
	const dispatch = useDispatch();

	/* ショッピングカートに入っているcartItemから、数量の合計を取得 */
	const amount = cartItems.reduce((some, item) => some + item.amount, 0);
	const totalPrice = cartItems.reduce((some, item) => some + item.price * item.amount, 0);

	return (
		<section className='cart'>
			<header>
				<h2>お買い物かご</h2>
			</header>
			{amount < 1 ?
				<h4 className='empty-cart'>お買い物かごは空です</h4> :
				<></>
			}
			<div>
				{cartItems.map((item) => {
					return <CartItem
						key={item.id}
						itemId={item.id}
						name={item.name}
						price={item.price}
						amount={item.amount}
						imageUrl={item.img}
					/>
				})}
			</div>
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>合計 <span>{totalPrice}円</span></h4>
				</div>
				{cartItems.length >= 1 ?
					<button className='btn clear-button' onClick={() => dispatch(openClearCartModal())}>全削除</button> :
					<></>
				}
			</footer>
		</section>
	)
}
