import './shop.styles.scss'
import { useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoriesContext } from '../../context/categoriesContext'
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categoriesMap).map(title => (
        <div className='container'>
          <h2 className='shop-category-title'>{title}</h2>
          <div className='products-container '>
            {categoriesMap[title].map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      ))}
    </>

  )
}

export default Shop