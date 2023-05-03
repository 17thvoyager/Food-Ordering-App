import React from 'react';

import classes from './MealItem.module.css';


const MealItem = (props) => {
 
    const price = props.price.toFixed(2);
    
    return (
        <li>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.discription}>{props.discripton}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div></div>

        </li>
    )
}

export default MealItem;