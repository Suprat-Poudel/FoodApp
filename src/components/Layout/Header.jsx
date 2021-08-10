import meals from '../../image/zomato.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'
const Header=(props)=>{
    
    return(
        <>
        <header className={classes.header}>
            <h1>Deliicious</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="Meals" />
        </div>

        </>
    )
}

export default Header;