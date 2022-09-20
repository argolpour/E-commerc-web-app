import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign IN With Google</button>
      <SignUpForm />


    </div>

  )
}

export default Signin