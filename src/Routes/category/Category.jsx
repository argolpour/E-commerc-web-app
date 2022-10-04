import './category.styles.scss'
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/ProductCard"
import { CategoriesContext } from "../../context/categoriesContext"
import Spinner from '../../components/spinner/Spinner'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])
  const [loading, setLoading] = useState(true)
  console.log(loading);
  useEffect(() => {
    setProducts(categoriesMap[category])
    if (categoriesMap[category]) {
      setLoading(false)
    }

  }, [category, categoriesMap])

  return (
    <>
      {
        loading ? <Spinner /> :
          <> <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className="category-container">

              {
                products && products.map((product) => <ProductCard key={product.id} product={product} />)
              }
            </div></>


      }
    </>
  )
}

export default Category