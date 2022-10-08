import { DirectoryContainer } from './directory.styles.js'
import { categories } from '../../categories'
import DirectoryItem from '../directory-item/DirectoryItem'
const Directory = () => {
  return (
    <DirectoryContainer className='container'>
      {categories.map(category => <DirectoryItem key={category.id} category={category} />)}
    </DirectoryContainer>
  )
}

export default Directory