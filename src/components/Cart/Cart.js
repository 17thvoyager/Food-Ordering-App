import React from 'react'

import classes from './Cart.module.css';
import Modal from '../UI/Modal.js';

const Cart = (props) => {
    const CartItems = [{
        id: 'c1', 
        name: 'sushi', 
        price: 11.99
    }].map((item) => <li>{item.name}</li> );

    return(
        <Modal onClick={props.CartClose}>
            <ul className={classes['cart-items']}>{CartItems}</ul>
            <div className={classes.total}>
                <span >Total Amount</span>
                <span>34.5</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.CartClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;
