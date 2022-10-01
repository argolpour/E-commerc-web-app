import './cart-dropdown.styles.scss'
import Button from '../button/button'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItem from '../cart-item/CartItem'
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartitem={item} />)}
      </div>
      <Button buttonType='inverted'>Go  To Checkout</Button>
    </div>
  )
}

export default CartDropDown