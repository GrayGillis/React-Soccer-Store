import { createContext, useReducer } from 'react';

type CartContextType = {
  items: [{
    id: number | null,
    quantity: number,
  }],
  addItem: React.Dispatch<React.SetStateAction<any>>,
  removeItem: React.Dispatch<React.SetStateAction<any>>
  clearCart: React.Dispatch<React.SetStateAction<any>>,
};

const CartContext = createContext<CartContextType | null>({
  items: [
    { id: null, quantity: 0, }
  ],
  addItem: (item: any) => {},
  removeItem: (id: any) => {},
  clearCart: () => {},
});

const cartReducer = (state: any, action: any) => {
  if (action.type === 'ADD_ITEM'){
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } 
    else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  else if (action.type === 'REMOVE_ITEM'){
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  else if (action.type === 'CLEAR_CART'){
    return { ...state, items: [] };
  }
  else return state;
}

export const CartContextProvider = ({ children }: { children: any}) => {

  const [cart, dispatchCartAction] = useReducer<any>(cartReducer, {
    items: []
  });

  const addItem = (item: any) => {
    //@ts-ignore
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  const removeItem = (id: any) => {
    //@ts-ignore
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  const clearCart = () => {
    // @ts-ignore
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  const cartContext = {
    //@ts-ignore
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  };
  
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;