import './shop.styles.scss'
import { useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoriesContext } from '../../context/categoriesContext'
import Spinner from '../../components/spinner/Spinner'
const Shop = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext)

  return (
    <>
      {loading ? <div className='loading'><Spinner /> </div> : Object.keys(categoriesMap).map((title, index) => (
        <div className='container' key={index} >
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