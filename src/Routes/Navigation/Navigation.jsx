import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.js'
import { Outlet } from "react-router-dom"
import { ReactComponent as Crown } from "../../assests/svg/crown.svg"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { signOutUser } from '../../utils/firebase/firebase'
import CardIcon from "../../components/cart-icon/CardIcon"
import CartDropDown from "../../components/cart-dropdown/CartDropDown"
import { CartContext } from "../../context/cartContext"
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartDropDownOpen } = useContext(CartContext)
  return (
    <>
      <NavigationContainer className="navigation">
        <LogoContainer className="logo-container" to='/'>
          <Crown />
        </LogoContainer>
        <NavLinks className="nav-links-container">
          <NavLink className="nav-link " to='/shop'>
            Shop
          </NavLink>
          {currentUser ? <span style={{ cursor: 'pointer' }} onClick={signOutUser}>Sign Out</span> : <NavLink className="nav-link " to='/auth'>
            Sign in
          </NavLink>}
          <CardIcon />

        </NavLinks>
        {isCartDropDownOpen && <CartDropDown />}
      </NavigationContainer>

      <Outlet />
    </>
  )
}

export default Navigation