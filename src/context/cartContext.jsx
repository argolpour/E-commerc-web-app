import { useState } from 'react'
import { createContext } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  //find if cartitems contains productToAdd
  const existedItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)


  //if found , increment quantity
  if (existedItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem)
  }

  //return new array with modified cartitems /new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}
export const CartContext = createContext({
  isCartDropDownOpen: false,
  setCartDropDownOpen: () => { },
  cartItems: [],
  addItemToCart: () => { }
})

export const CartProvider = ({ children }) => {
  const [isCartDropDownOpen, setCartDropDownOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const value = { isCartDropDownOpen, setCartDropDownOpen, addItemToCart, cartItems }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}