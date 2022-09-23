import './signinForm.styles.scss'
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from '../button/button'
import {  signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import { toast } from 'react-toastify'
const defualtFormFeilds = {
  email: '',
  password: '',
}
const SignINForm = () => {
  const [formFields, setFormFields] = useState(defualtFormFeilds)
  const { email, password } = formFields;
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
    await signInWithGooglePopup()
  }
  //---------------------------------------------------------sign in with email and password----------------------------------------------------------
  const signinWithEmailAndPassword = async (event) => {
    event.preventDefault()
    try {
     await signInAuthUserWithEmailAndPassword(email, password)
      resetState()
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case 'auth/wrong-password':
          toast.error('the password is wrong')
          break;
        case 'auth/user-not-found':
          toast.error('the user not found')
          break;
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