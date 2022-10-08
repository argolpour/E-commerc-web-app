import { CartDropDownContainer, Cartitems, EmptyMessageContainer } from './cart-dropdown.styles.js'
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
    <CartDropDownContainer >
      {cartItems.length ? <Cartitems >
        {cartItems.map(item => <CartItem key={item.id} cartitem={item} />)}
      </Cartitems> : <EmptyMessageContainer ><h4 className='no-data' >There is No product Here</h4></EmptyMessageContainer>}
      <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={navigateToCheckout}>Go  To Checkout</Button>
    </CartDropDownContainer>
  )
}

export default CartDropDown