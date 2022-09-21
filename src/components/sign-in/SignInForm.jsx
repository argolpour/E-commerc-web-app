import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from '../button/button'
import './signinForm.styles.scss'
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
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
  //---------------------------------------------------------------sign in with google ------------------------------------------------
  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup()
    await createUserDocumentFromAuth(response.user)
  }
  //---------------------------------------------------------sign in with email and password----------------------------------------------------------
  const signinWithEmailAndPassword = async (event) => {
    event.preventDefault()
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response);
    } catch (error) {
      console.log(error);
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