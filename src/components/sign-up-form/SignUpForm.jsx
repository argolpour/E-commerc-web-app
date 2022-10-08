import { SignUpContainer } from './signUpForm.styles.js'
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from '../button/button'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import { toast } from 'react-toastify'

const defualtFormFeilds = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defualtFormFeilds)
  const { displayName, email, password, confirmPassword } = formFields;
  //----------------------------------------------------------------input onChange Handler-----------------------------------------------------------
  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  //-----------------------------------------------------------------reset state----------------------------------------------------------------------
  const resetState = () => {
    setFormFields(defualtFormFeilds)
  }
  //-------------------------------------------------------------signUp with Email And Password-----------------------------------
  const signupWithEmailAndPaswword = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      toast.error("password do not match")
      return
    };
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password)
      if (response) {
        await createUserDocumentFromAuth(response.user, { displayName })
        resetState()
      }

    } catch (error) {
      console.log(error.message, error.code);
      switch (error.code) {
        case 'auth/weak-password':
          toast.error(' Password should be at least 6 characters')
          break
        case 'auth/email-already-in-use':
          toast.error(' this user with entered email is already exist');
          break
        default:
          toast.error(error.code)
      }
    }
  }
  return (
    <SignUpContainer>
      <h2>you do not have account</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={signupWithEmailAndPaswword} >
        <FormInput label='Display Name' type="text" name="displayName" required onChange={handlechange} value={displayName} />
        <FormInput label='email' type="email" name="email" required onChange={handlechange} value={email} />
        <FormInput label='password' type="password" name="password" required onChange={handlechange} value={password} />
        <FormInput label='confirmPassword' type="password" name="confirmPassword" required onChange={handlechange} value={confirmPassword} />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm