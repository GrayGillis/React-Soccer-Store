import React, { useContext } from 'react'
import UserProgressContext from '../contexts/UserProgressContext';
import CartContext from '../contexts/CartContext';
import { Dialog } from 'primereact/dialog';
import Input from '../UI/Input';
import { createPortal } from 'react-dom';

const Checkout = ({
    onClose,
    showModal,
}:{
    onClose: (arg0: boolean) => void,
    showModal: boolean
}) => {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx?.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price
        ,0
    );

    const handleClose = () => {
        userProgressCtx.hideCheckout();
    }

    const handleFinish = () => {
        userProgressCtx.hideCheckout();
        //@ts-ignore
        cartCtx?.clearCart();
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }
    }

    let actions = (
        <>
        <button type="button" onClick={handleClose}>
            Close
        </button>
        <button>Submit Order</button>
        </>
    );

    return (
        <>
        {createPortal(
            <Dialog header='Checkout' visible={showModal} onHide={() => onClose}>
                <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {cartTotal}</p>
                {/* <p>Total Amount: {currencyFormatter.format(cartTotal)}</p> */}

                <Input label="Full Name" type="text" id="name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
                </div>

                <p className="modal-actions">{actions}</p>
            </form>
            </Dialog>,
            document.getElementById('root') as Element
        )}
        </>
  );
}

export default Checkout