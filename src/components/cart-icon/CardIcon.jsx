import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.js'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
const CardIcon = () => {
  const { isCartDropDownOpen, setCartDropDownOpen, cartCount } = useContext(CartContext)
  const toogleCartDropDown = () => {
    setCartDropDownOpen(!isCartDropDownOpen)
  }
  return (
    <CartIconContainer onClick={toogleCartDropDown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CardIcon