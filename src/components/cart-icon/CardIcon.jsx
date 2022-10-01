import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assests/svg/shoppingbag.svg'
const CardIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CardIcon