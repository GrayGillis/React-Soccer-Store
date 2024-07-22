import { currencyFormatter } from '../util/formatting.js';

const CartItem = ({
    title,
    quantity,
    price,
    onIncrease,
    onDecrease,
}:{
    title: string,
    quantity: number,
    price: number,
    onIncrease: () => void,
    onDecrease: () => void,
}) => {
  return (
    <li className="cart-item">
      <p>
        {title} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

export default CartItem