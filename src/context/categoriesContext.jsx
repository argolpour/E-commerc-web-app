import { useEffect, useState } from 'react'
import { createContext } from 'react'
// import { addCollectionAndDocument } from '../utils/firebase/firebase.js'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const [loading, setLoading] = useState(false)
  const value = { categoriesMap, loading }
  //add collection to firestorm only once
  // useEffect(() => {
  //   addCollectionAndDocument('categories', SHOP_DATA)
  // }, [])
  useEffect(() => {
    const getcategoriesMap = async () => {
      setLoading(true)
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
      setLoading(false)
    }

    getcategoriesMap()
  }, [])


  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}