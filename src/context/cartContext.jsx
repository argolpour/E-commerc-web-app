import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext({
  isCartDropDownOpen: false,
  setCartDropDownOpen: () => { }
})

export const CartProvider = ({ children }) => {
  const [isCartDropDownOpen, setCartDropDownOpen] = useState(false)
  const value = { isCartDropDownOpen, setCartDropDownOpen }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}