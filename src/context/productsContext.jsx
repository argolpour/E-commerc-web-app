import { useEffect, useState } from 'react'
import { createContext } from 'react'
import SHOP_DATA from '../shop-data'
import { addCollectionAndDocument } from '../utils/firebase/firebase.js'

export const ProductsContext = createContext({
  products: []
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const value = { products }
  useEffect(() => {
    addCollectionAndDocument('categories', SHOP_DATA)
  }, [])

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}