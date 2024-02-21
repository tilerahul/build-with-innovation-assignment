const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const newItem = action.payload;
        return {
          ...state,
          cart: [...state.cart, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + newItem.price,
          discountedPrice : state.discountedPrice + newItem.price*newItem.discountPercentage/100,
        };
      case 'REMOVE_FROM_CART':
        const removedItemId = action.payload;
        const removedItem = state.cart.find(item => item.id === removedItemId);
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== removedItemId),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - (removedItem ? removedItem.price : 0),
          discountedPrice: state.discountedPrice - (removedItem ? removedItem.price*removedItem.discountPercentage/100 : 0),
        };
      case 'UPDATE_QUANTITY':
        const { id, quantity } = action.payload;
        const updatedItem = state.cart.find(item => item.id === id);
        const updatedCart = state.cart.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
        return {
          ...state,
          cart: updatedCart,
          totalPrice: state.totalPrice + ((quantity - updatedItem.quantity) * updatedItem.price),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  