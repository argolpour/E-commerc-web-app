import { ProductcardContainer, Footer, Price, Name } from './product-card.styles.js'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import Button, { BUTTON_TYPE_CLASS } from '../button/button'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => {
    addItemToCart(product)
  }

  return (
    <ProductcardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price >{price} </Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart}>Add to Card</Button>
    </ProductcardContainer>
  )
}

export default ProductCard