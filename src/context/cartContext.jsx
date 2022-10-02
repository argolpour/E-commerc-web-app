import { useEffect, useState } from 'react'
import { createContext } from 'react'
//------------------------------------------helper function to add a new object based on check for existing----------------------------------------------------
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
//------------------------------------------helper function to remove a new object based on check for existing----------------------------------------------------
const removeCartItem = (cartitems, itemToRemove) => {
  const existedItem = cartitems.find(item => item.id === itemToRemove.id)

  if (existedItem.quantity === 1) {
    return cartitems.filter(item => item.id !== itemToRemove.id)
  }
  return cartitems.map(item => item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item)
}
export const CartContext = createContext({
  isCartDropDownOpen: false,
  setCartDropDownOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  cartCount: 0
})

export const CartProvider = ({ children }) => {
  const [isCartDropDownOpen, setCartDropDownOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }
  useEffect(() => {
    const cartTotalCount = cartItems.reduce((total, cartitem) => total + cartitem.quantity, 0)
    setCartCount(cartTotalCount)

  }, [cartItems])

  const value = { isCartDropDownOpen, setCartDropDownOpen, addItemToCart, cartItems, cartCount, removeItemFromCart }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}