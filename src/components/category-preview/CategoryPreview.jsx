import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles.js'
import ProductCard from "../product-card/ProductCard"
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer >
      <Title>
        <Link to={title}> <span className="title">{title.toUpperCase()}</span></Link>
      </Title>
      <Preview >
        {
          products.filter((_, index) => index < 4).map((product) => <ProductCard key={product.id} product={product} />)
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview