import React,{useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals.js';
import Cart from  '../src/components/Cart/Cart.js';
import CartProvider from './store/CartProvider.js';



function App() {

  const [CartLogic, setCartLogic] = useState(false);

  const cartInvocation = () => {
    setCartLogic(true)
  }
  const CartClosing = () => {
    setCartLogic(!true);
  }


  return (
    <CartProvider>
      {CartLogic ? <Cart CartClose={CartClosing}/> : null}
      <Header CartPage={cartInvocation}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
