import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }
  return (
    <div>Signin
      <button onClick={logGoogleUser}>Sign IN With Google</button>
    </div>

  )
}

export default Signin