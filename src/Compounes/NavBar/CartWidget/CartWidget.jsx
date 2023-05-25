import cart from './assets/cart.svg'
import '../navBar.css'
const CartWidget = () => {
    return(
        <div className='cart-div'>
            <img id='cart-img' src={cart} alt="cart-widget"/> 
            0   
        </div>
    )
}

export default CartWidget