import React from 'react'
import { useDispatch } from 'react-redux'
import { MinusIcon, PlusIcon } from '../icons'
import { ShoppingCartSlice } from '../stores/ShoppingCart'

interface props {
	itemId: number,
	name: string,
	price: number,
	amount: number,
	imageUrl: string
};

export const CartItem = ({ itemId, name, price, amount, imageUrl }: props) => {
	const dispatch = useDispatch();
	const { removeItem, increase, decrease } = ShoppingCartSlice.actions;

	return (
		<article className='cart-item'>
			<img src={imageUrl} alt={name} />
			<div>
				<h4>{name}</h4>
				<h4 className='item-price'>{price}円</h4>
				<button className='btn remove-btn' onClick={() => dispatch(removeItem(itemId))}>削除</button>
			</div>
			<div>
				<button className='amount-btn' onClick={() => dispatch(increase(itemId))}>
					<PlusIcon />
				</button>
				<p className='amount'>{amount}</p>
				{/* 商品が2つ以上あるときは数量をひとつ減らし(decrease), 1つのときは商品自体をカートから除去する */}
				<button className='amount-btn' onClick={() => amount > 1 ? dispatch(decrease(itemId)) : dispatch(removeItem(itemId))}>
					<MinusIcon />
				</button>
			</div>
		</article>

	)
}
