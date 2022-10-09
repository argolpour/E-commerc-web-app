import { CategoryContainer, CategoryTitle } from './category.styles'
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
          <> <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>

              {
                products && products.map((product) => <ProductCard key={product.id} product={product} />)
              }
            </CategoryContainer></>


      }
    </>
  )
}

export default Category