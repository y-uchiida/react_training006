import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../stores/ShoppingCart'
import { shoppingCartStore } from '../stores/ShoppingCartStore';
import { CartIcon } from '../icons';

export const Navbar = () => {
	const cartItems = useSelector<shoppingCartStore, CartItem[]>((store) => store.shoppingCart.cartItems);

	/* ショッピングカートに入っているcartItemから、数量の合計を取得 */
	const amount = cartItems.map(item => (item.amount)).reduce((sum, amount) => sum + amount, 0);

	return (
		<nav>
			<div className='nav-center'>
				<h3>redux shopping</h3>
				<div className='nav-container'>
					<CartIcon></CartIcon>
					<div className='amount-container'>
						<p className='total-amount'>{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	)
}
