import { ChechoutContaioner, CheckoutHeader, CheckoutBlock, Total } from './checkout.styles.js'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <ChechoutContaioner>
      <CheckoutHeader>
        <div className="header-block">
          <span>Product</span>
        </div>
        <CheckoutBlock>
          <span>Description</span>

        </CheckoutBlock>
        <CheckoutBlock>
          <span>Quantity</span>

        </CheckoutBlock>
        <CheckoutBlock>
          <span>Price</span>

        </CheckoutBlock>
        <CheckoutBlock>
          <span>Remove</span>
        </CheckoutBlock>
      </CheckoutHeader>

      {cartItems.length > 0 ? cartItems.map((cartitem) => {

        return (
          <CheckoutItem key={cartitem.id} cartItem={cartitem} />
        )
      }) : <h2>No Cart Items Here</h2>}
      <Total>Total:${cartTotal}</Total>
    </ChechoutContaioner>
  )
}

export default Checkout