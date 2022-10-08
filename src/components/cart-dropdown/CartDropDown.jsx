import './cart-dropdown.styles.scss'
import Button, { BUTTON_TYPE_CLASS } from '../button/button'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const navigateToCheckout = () => {
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartitem={item} />)}
      </div> : <div className='no-data-container'><h4 className='no-data' >There is No product Here</h4></div>}
      <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={navigateToCheckout}>Go  To Checkout</Button>
    </div>
  )
}

export default CartDropDown