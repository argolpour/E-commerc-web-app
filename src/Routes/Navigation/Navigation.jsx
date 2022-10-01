import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as Crown } from "../../assests/svg/crown.svg"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { signOutUser } from '../../utils/firebase/firebase'
import CardIcon from "../../components/cart-icon/CardIcon"
import CartDropDown from "../../components/cart-dropdown/CartDropDown"
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Crown />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link " to='/shop'>
            Shop
          </Link>
          {currentUser ? <span style={{ cursor: 'pointer' }} onClick={signOutUser}>Sign Out</span> : <Link className="nav-link " to='/auth'>
            Sign in
          </Link>}
          <CardIcon />

        </div>
        <CartDropDown />
      </div>

      <Outlet />
    </>
  )
}

export default Navigation