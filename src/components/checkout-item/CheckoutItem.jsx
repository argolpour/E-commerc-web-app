import { CheckoutItemContainer, ImageContainer, RemoveButton, Arrow, Quantity } from './checkout-item.styles.js'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
  const clearItemFromCartHandler = () => {
    clearItemFromCart(cartItem)
  }
  const incrementHndler = () => {
    addItemToCart(cartItem)
  }
  const decrementHndler = () => {
    removeItemFromCart(cartItem)
  }
  return (
    <CheckoutItemContainer >
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name}</span>
      <Quantity >
        <Arrow onClick={decrementHndler}>&#10094;</Arrow>
        <span className='value'>{quantity}</span>
        <Arrow onClick={incrementHndler}>&#10095;</Arrow>
      </Quantity>
      <span className="price">{price}</span>
      <RemoveButton onClick={clearItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem