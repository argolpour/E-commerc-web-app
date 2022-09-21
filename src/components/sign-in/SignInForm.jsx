import './signinForm.styles.scss'
import { useContext, useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from '../button/button'
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import { UserContext } from "../../context/userContext";
import { toast } from 'react-toastify'
const defualtFormFeilds = {
  email: '',
  password: '',
}
const SignINForm = () => {
  const [formFields, setFormFields] = useState(defualtFormFeilds)
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext)
  //---------------------------------------------------------input onchange handler-------------------------------------------------------------------
  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  //-----------------------------------------------------------------reset state----------------------------------------------------------------------
  const resetState = () => {
    setFormFields(defualtFormFeilds)
  }
  //---------------------------------------------------------------sign in with google ------------------------------------------------
  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup()
    await createUserDocumentFromAuth(response.user)
    setCurrentUser(response.user)
  }
  //---------------------------------------------------------sign in with email and password----------------------------------------------------------
  const signinWithEmailAndPassword = async (event) => {
    event.preventDefault()
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
      resetState()
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case 'auth/wrong-password':
          toast.error('the password is wrong')
          break;
        case 'auth/user-not-found':
          toast.error('the user not found')
        default:
          console.log(error.code);
      }
    }
  }
  return (
    <div className="sign-up-container">
      <h2>Already  have an account</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={signinWithEmailAndPassword} >
        <FormInput label='email' type="email" name="email" required onChange={handlechange} value={email} />
        <FormInput label='password' type="password" name="password" required onChange={handlechange} value={password} />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType='google' onClick={signInWithGoogle}>Sign in With Google</Button>
        </div>

      </form>
    </div>
  )
}

export default SignINForm