import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignINForm from '../../components/sign-in/SignInForm'

const Authentication = () => {
  return (
    <div className='authentication-container container'>
      <SignINForm />
      <SignUpForm />


    </div>

  )
}

export default Authentication