import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)
  return (
    <div>
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
    </div>
  )
}

export default Checkout