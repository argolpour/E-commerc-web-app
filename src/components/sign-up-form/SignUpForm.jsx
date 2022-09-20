import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from '../button/button'
import './signUpForm.styles.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
const defualtFormFeilds = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defualtFormFeilds)
  const { displayName, email, password, confirmPassword } = formFields;
  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  const submitHndler = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("password do not match")
      return
    };
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password)
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user, { displayName })
      }

    } catch (error) {
      console.log(error.message, error.code);
      switch (error.code) {
        case 'auth/weak-password':
          alert(' Password should be at least 6 characters')
        case 'auth/email-already-in-use':
          alert(' this user with entered email is already exist');
      }
    }
  }
  return (
    <div className="sign-up-container">
      <h2>you do not have account</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={submitHndler} >
        <FormInput label='Display Name' type="text" name="displayName" required onChange={handlechange} value={displayName} />

        <FormInput label='email' type="email" name="email" required onChange={handlechange} value={email} />

        <FormInput label='password' type="password" name="password" required onChange={handlechange} value={password} />

        <FormInput label='confirmPassword' type="password" name="confirmPassword" required onChange={handlechange} value={confirmPassword} />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm