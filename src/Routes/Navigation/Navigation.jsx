import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as Crown } from "../../assests/svg/crown.svg"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { signOutUser } from '../../utils/firebase/firebase'
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  //------------------------------------------------------sign out user-------------------------------------------------------------------------------
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
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
          {currentUser ? <span style={{ cursor: 'pointer' }} onClick={signOutHandler}>Sign Out</span> : <Link className="nav-link " to='/auth'>
            Sign in
          </Link>}

        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation