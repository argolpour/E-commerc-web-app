
import { categories } from '../../categories'
import DirectoryItem from '../directory-item/DirectoryItem'
import './directory.styles.scss'
const Directory = () => {
  return (
    <div className='directory-container container'>
      {categories.map(category => <DirectoryItem key={category.id} category={category} />)}
    </div>
  )
}

export default Directory