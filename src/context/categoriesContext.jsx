import { useEffect, useState } from 'react'
import { createContext } from 'react'
import SHOP_DATA from '../shop-data'
// import { addCollectionAndDocument } from '../utils/firebase/firebase.js'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const value = { categoriesMap }
  //add collection to firestorm only once
  // useEffect(() => {
  //   addCollectionAndDocument('categories', SHOP_DATA)
  // }, [])
  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    }

    getcategoriesMap()
  }, [])


  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}