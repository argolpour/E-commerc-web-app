import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../categories_preview/CategoriesPreview'
import Preview from '../category/Category'
const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Preview />} />
      </Routes>

    </>

  )
}

export default Shop