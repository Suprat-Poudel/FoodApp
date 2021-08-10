import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';
const MealItem=(props)=>{
   const cartCtx= useContext(CartContext)
    const price=`${props.price.toFixed(2)}`;
    const addToCartHandler =amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })

    }
    return<li className={classes.meal}>
        <div>
            {/* <p>{props.id}</p> */}
         <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>&#8377;{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
}
export default MealItem;