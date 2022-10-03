import { useEffect, useState } from 'react'
import { createContext } from 'react'
import SHOP_DATA from '../shop-data'
// import { addCollectionAndDocument } from '../utils/firebase/firebase.js'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js'

export const ProductsContext = createContext({
  products: []
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const value = { products }
  //add collection to firestorm only once
  // useEffect(() => {
  //   addCollectionAndDocument('categories', SHOP_DATA)
  // }, [])
  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    }

    getcategoriesMap()
  }, [])


  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}