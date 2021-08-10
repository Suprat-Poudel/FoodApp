import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../store/CartContext';
import Checkout from './Checkout';

const Cart = (props) => {
  const [checkout, setCheckout]=useState(false)
  const [submitting, setIsSubmitting]=useState(false)
  const [didSubmit, setDidSubmit]=useState(false)
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  const orderHandler=()=>{
    setCheckout(true)
  }
  const SubmitOrderHandler=async(userData)=>{
    setIsSubmitting(true)
     await fetch('https://deliicious-default-rtdb.firebaseio.com/orders.json',{
    method:'POST',
    body:JSON.stringify({
    user:userData,
    // orderedItem:cartCtx.items 
    })
    
  })
  //always succed
  setIsSubmitting(false)
  setDidSubmit(true)
  cartCtx.clearCart()
}


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent= 
  <>
  {cartItems}
  <div className={classes.total}>
    <span>Total Amount</span>
    <span>&#8377;{totalAmount}</span>
  </div>
 {checkout&& <Checkout onConfirm={SubmitOrderHandler} onCancel={props.onClose}/>}
  {!checkout && <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>}
  </>

  const isSubmittingModalContent=<p>Sending order Data..</p>
  const didSubmitModalContentContent=
  <>
  <p>Ordered Successfully!</p>
  <div className={classes.actions}>
    <button className={classes.button} onClick={props.onClose}>
      Close
    </button>
    </div>
  </>
  return (
    <Modal onClose={props.onClose}>
     {!submitting && !didSubmit&& cartModalContent}
     {submitting && isSubmittingModalContent}
     {!submitting && didSubmit && didSubmitModalContentContent}
    </Modal>
  );
};

export default Cart;