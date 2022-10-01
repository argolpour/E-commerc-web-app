import './cart-dropdown.styles.scss'
import Button from '../button/button'
const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">

      </div>
      <Button buttonType='inverted'>Go  To Checkout</Button>
    </div>
  )
}

export default CartDropDown