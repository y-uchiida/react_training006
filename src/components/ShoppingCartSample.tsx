import { shoppingCartStore } from "../stores/ShoppingCartStore";
import { Navbar } from "./Navbar";
import '../shoppingCart.css'
import { CartContainer } from "./CartContainer";
import { ClearCartModal } from "./ClearCartModal";
import { useSelector } from "react-redux";

export const ShoppingCartSample = () => {
	const isOpen = useSelector<shoppingCartStore, boolean>((state) => state.clearCartModal.isOpen);

	return (
		<>
			{
				isOpen ?
					<ClearCartModal></ClearCartModal>
					:
					<></>
			}

			<Navbar></Navbar>
			<CartContainer></CartContainer>
		</>
	);
}
