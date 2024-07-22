import soccerStore from '../images/soccerStore.png';
import { useContext, useState } from 'react';
import CartContext from '../contexts/CartContext';
import UserProgressContext from '../contexts/UserProgressContext';
import CartModal from '../Modals/CartModal';

const Header = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const [cartModal, setCartModal] = useState(false);

    const totalCartItems = cartCtx?.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    const handleShowCart = () => {
        userProgressCtx.showCart();
        setCartModal(true);
    }

    const handleHideCart = () => {
        setCartModal(false)
    }

    return (
        <header id='main-header' >
            <div className="title">
                <h1>The Soccer Store</h1>
                <img src={soccerStore} alt="X" />
            </div>
            <nav>
                <button onClick={handleShowCart}>
                    Shopping Cart ({totalCartItems})
                </button>
            </nav>
            {
            <CartModal 
                onClose={handleHideCart}
                visible={cartModal}
            />}
        </header>
    )
}

export default Header