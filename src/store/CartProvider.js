import React,{useReducer} from 'react';

import CartContext from './cart-context.js';
import Cart from '../components/Cart/Cart.js';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const CartReducer = (state, action) => {
    if(action.type === 'ADD') {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return {
        item: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
};

const CartProvider = (props) => {

    const[cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = () => {
        dispatchCartAction({ type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
     <CartContext.Provider value={cartContext}>
        {props.children}
     </CartContext.Provider>   
    )
}

export default CartProvider;