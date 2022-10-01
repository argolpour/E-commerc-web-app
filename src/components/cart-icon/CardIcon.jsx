import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assests/svg/shoppingbag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
const CardIcon = () => {
  const { isCartDropDownOpen, setCartDropDownOpen } = useContext(CartContext)
  const toogleCartDropDown = () => {
    setCartDropDownOpen(!isCartDropDownOpen)
  }
  return (
    <div className='cart-icon-container' onClick={toogleCartDropDown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CardIcon