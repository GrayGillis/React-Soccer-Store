import { Soccer } from '../util/SoccerList'
import '../App.css'
import { useContext, useRef } from 'react'
import { Toast } from 'primereact/toast'
import CartContext from '../contexts/CartContext'
import { currencyFormatter } from '../util/formatting'

const SoccerItem = (
    {
        soccer
    }:
    {
        soccer: Soccer
    }
) => {

    const cartCtx = useContext(CartContext);
    const toastMessage = useRef<Toast>(null);

    const handleAddItemToCart = () => {
        cartCtx?.addItem(soccer);
        toastMessage.current?.show({severity:'success', summary: 'Success', detail:'Added Item to Cart', life: 3000});
    }
    
    return (
        <li className='soccer-item'>
            <Toast ref={toastMessage}/>
            <article>
                <img src={soccer.image} alt="" />
                <div>
                <h3>{soccer.title}</h3>
                <p className="soccer-item-price">
                    {currencyFormatter.format(soccer.price)}
                    {/* ${soccer.price.toFixed(2)} */}
                </p>
                </div>
                <p className="soccer-item-actions">
                    <button onClick={handleAddItemToCart}>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}

export default SoccerItem