import React from 'react';
import mealsImage from '../../Assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';


const Header = (props) => {

    return(
        <React.Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
            <HeaderCartButton onClick={props.CartPage}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of deliciouse Food"/>
        </div>
        </React.Fragment>
    )
}

export default Header;