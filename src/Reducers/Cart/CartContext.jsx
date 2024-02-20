import React, { createContext, useReducer, useContext } from 'react';
import cartReducer from './cartReducer';

const initialState = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
  };

const CartContext = createContext();

export const CartProvider = ({children}) =>{ 
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);