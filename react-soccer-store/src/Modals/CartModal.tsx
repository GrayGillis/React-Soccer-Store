import { Dialog } from 'primereact/dialog';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import CartContext from '../contexts/CartContext';
import UserProgressContext from '../contexts/UserProgressContext';
import { currencyFormatter } from '../util/formatting';
import CartItem from '../components/CartItem';


const CartModal = (
  {
    onClose,
    visible
  }:{
    onClose: (arg0: boolean) => void,
    visible: boolean
  }
) => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx?.items.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    );

    function handleCloseCart() {
      userProgressCtx.hideCart();
    }

    function handleGoToCheckout() {
      userProgressCtx.showCheckout();
    }

    const handleHide = () => {
      userProgressCtx.progress === 'cart' ? handleCloseCart : null
    }

    return (
      <Dialog 
        style={{ background: 'gray'}}
        header='Shopping Cart' 
        visible={visible} 
        onHide={() => onClose}>
          <h2>Your Cart</h2>
        <ul>
          {cartCtx?.items && cartCtx.items.length > 0 ? cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartCtx?.addItem(item)}
              onDecrease={() => cartCtx?.removeItem(item.id)}
            />
          )) : <p>No items in cart</p>}
        </ul>
        <p className="cart-total">{cartTotal ? currencyFormatter.format(cartTotal) : null}</p>
        <p className="modal-actions">
          <button onClick={handleCloseCart}>
            Close
          </button>
          {cartCtx && cartCtx.items.length > 0 && (
            <button onClick={handleGoToCheckout}>Go to Checkout</button>
          )}
        </p>
      </Dialog>
    )
}

export default CartModal