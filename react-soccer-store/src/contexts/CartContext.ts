import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item: any) => {},
  removeItem: (id: any) => {},
  clearCart: () => {},
});