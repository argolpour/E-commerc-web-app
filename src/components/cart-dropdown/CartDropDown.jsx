import './cart-dropdown.styles.scss'
import Button from '../button/button'
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
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartitem={item} />)}
      </div>
      <Button buttonType='inverted' onClick={navigateToCheckout}>Go  To Checkout</Button>
    </div>
  )
}

export default CartDropDown