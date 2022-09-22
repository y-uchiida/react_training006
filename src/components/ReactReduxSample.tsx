import { counterState, decrement, increment } from '../reducers/counter';
import { login, logout, isLoginState } from '../reducers/isLogin';

import { useDispatch, useSelector } from 'react-redux'


export const ReactReduxSample = () => {
	const counter = useSelector<counterState, number>((state) => state.counter);
	const isLogin = useSelector<isLoginState, boolean>((state) => state.isLogin);

	const dispatch = useDispatch();
	return (
		<>
			<h1>ReactReduxSample</h1>
			<h3>counter: {counter}</h3>
			<div>
				<button onClick={() => dispatch(increment())}> + </button> <button onClick={() => dispatch(decrement())}> - </button>
			</div>
			<h3>isLogin: {isLogin ? 'true' : 'false'}</h3>
			<div>
				{isLogin ?
					<button onClick={() => dispatch(logout())}>logout</button>
					:
					<button onClick={() => dispatch(login())}>login</button>
				}
			</div>
		</>
	)
}
