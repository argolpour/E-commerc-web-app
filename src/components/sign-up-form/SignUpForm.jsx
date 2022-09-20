import { useState } from "react";
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
    <div>
      <h1>Sign Up With Your Email And Password</h1>
      <form onSubmit={submitHndler} >
        <label htmlFor="">Display Name</label>
        <input type="text" name="displayName" required onChange={handlechange} value={displayName} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required onChange={handlechange} value={email} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required onChange={handlechange} value={password} />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" name="confirmPassword" required onChange={handlechange} value={confirmPassword} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm