import './checkout.styles.scss'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)
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
        const { id, name, quantity } = cartitem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemFromCart(cartitem)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(cartitem)}>increment</span>
          </div>
        )
      })}
      <span className="total">total:0</span>
    </div>
  )
}

export default Checkout