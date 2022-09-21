import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignINForm from '../../components/sign-in/SignInForm'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

const Authentication = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser);
  return (
    <div className='authentication-container container'>
      <SignINForm />
      <SignUpForm />


    </div>

  )
}

export default Authentication