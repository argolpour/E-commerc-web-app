import { CartItemContainer, ItemDetails } from './cart-item.styles.js'
const CartItem = ({ cartitem }) => {
  const { name, quantity, price, imageUrl } = cartitem
  return (
    <CartItemContainer className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity}*{price}</span>
      </ItemDetails>

    </CartItemContainer>
  )
}

export default CartItem