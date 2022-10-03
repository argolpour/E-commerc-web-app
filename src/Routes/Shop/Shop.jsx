import './shop.styles.scss'
import { useContext } from 'react'
import { CategoriesContext } from '../../context/categoriesContext'
import Spinner from '../../components/spinner/Spinner'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
const Shop = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext)

  return (
    <>
      {loading ? <div className='loading'><Spinner /> </div> : Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </>

  )
}

export default Shop