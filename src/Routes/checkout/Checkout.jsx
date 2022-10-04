import './checkout.styles.scss'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
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

      {cartItems.length > 0 ? cartItems.map((cartitem) => {

        return (
          <CheckoutItem key={cartitem.id} cartItem={cartitem} />
        )
      }) : <h2>No Cart Items Here</h2>}
      <span className="total">Total:${cartTotal}</span>
    </div>
  )
}

export default Checkout