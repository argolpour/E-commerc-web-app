import './checkout.styles.scss'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

const Checkout = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>

        </div>
        <div className="header-block">
          <span>Quantity</span>

        </div>
        <div className="header-block">
          <span>Price</span>

        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartitem) => {

        return (
          <CheckoutItem key={cartitem.id} cartItem={cartitem} />
        )
      })}
      <span className="total">Total:0</span>
    </div>
  )
}

export default Checkout