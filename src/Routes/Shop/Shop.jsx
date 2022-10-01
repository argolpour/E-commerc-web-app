import './shop.styles.scss'
import { useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { ProductsContext } from '../../context/productsContext'
const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className='products-container container'>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default Shop