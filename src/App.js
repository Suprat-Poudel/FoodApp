import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './components/store/CartProvider';
import Footer from './components/Meals/MealItem/Footer';
function App() {
  const[cartShown, setCartShown]=useState(false);
  const showCartHandler=()=>{
    setCartShown(true);
  }
  const hideCartHandler=()=>{
    setCartShown(false)
  }
  return (
      <>
      <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
      <Footer></Footer>
      </>

  );
}

export default App;
