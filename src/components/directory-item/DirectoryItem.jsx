import { DirectoryItemContainer, Body, BackgroundContainer } from './DirectoryItem.styles.js'
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <DirectoryItemContainer>
      <BackgroundContainer imageUrl={imageUrl} ></BackgroundContainer>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>

    </DirectoryItemContainer>
  )
}

export default DirectoryItem