import { AthenticationContainer } from './authentication.styles'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignINForm from '../../components/sign-in/SignInForm'
const Authentication = () => {
  return (
    <AthenticationContainer className=' container'>
      <SignINForm />
      <SignUpForm />
    </AthenticationContainer>

  )
}

export default Authentication