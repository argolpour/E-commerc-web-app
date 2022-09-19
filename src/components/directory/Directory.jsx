
import { categories } from '../../categories'
import CategoryItem from '../category-item/CategoryItem'
import './directory.styles.scss'
const Directory = () => {
  return (
    <div className='directory-container container'>
      {categories.map(category => <CategoryItem key={category.id} category={category} />)}
    </div>
  )
}

export default Directory