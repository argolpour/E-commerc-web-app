import { CartItemContainer, ItemDetails } from './cart-item.styles.js'
const CartItem = ({ cartitem }) => {
  const { name, quantity, price, imageUrl } = cartitem
  return (
    <CartItemContainer >
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails >
        <span className='name'>{name}</span>
        <span className='price'>{quantity}*{price}</span>
      </ItemDetails>

    </CartItemContainer>
  )
}

export default CartItem