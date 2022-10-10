import { Link } from 'react-router-dom'
import { DirectoryItemContainer, Body, BackgroundContainer } from './DirectoryItem.styles.js'
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <DirectoryItemContainer>
      <BackgroundContainer imageUrl={imageUrl} ></BackgroundContainer>
      <Body>
        <h2><Link to={`/shop/${title}`}>{title}</Link></h2>
        <p>Shop Now</p>
      </Body>

    </DirectoryItemContainer>
  )
}

export default DirectoryItem