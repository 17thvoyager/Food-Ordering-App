import React,{useContext, useState} from 'react'

import classes from './Cart.module.css';
import Modal from '../UI/Modal.js';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem.js';
import Checkout from './Checkout.js';

const Cart = (props) => {
    const [checkout, setCheckout] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = (event) => {
        setCheckout(true)
    }

    const CartItems = cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
    ));

    const modalAction = (
        <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.CartClose}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    )
        
    return(
        <Modal onClick={props.CartClose}>
            <ul className={classes['cart-items']}>{CartItems}</ul>
            <div className={classes.total}>
                <span >Total Amount</span>
                <span>{`$${totalAmount}`}</span>
            </div>
            {checkout && <Checkout onCancel={props.CartClose}/>}
            {!checkout && modalAction}
        </Modal>
    )
}

export default Cart;
