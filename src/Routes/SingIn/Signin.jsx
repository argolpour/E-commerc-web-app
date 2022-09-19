import { signInWithGooglePopup } from '../../utils/firebase/firebase'
const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response);
  }
  return (
    <div>Signin
      <button onClick={logGoogleUser}>Sign IN With Google</button>
    </div>

  )
}

export default Signin