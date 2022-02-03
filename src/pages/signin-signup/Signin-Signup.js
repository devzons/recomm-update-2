import React from 'react'

import SignIn from '../../components/sign-in/sign-in'
import SingUp from '../../components/sign-up/sign-up'

import './Signin-Signup.scss'

const SignInAndSignUpPage = () => (
  <div className="signin-signup">
    <SignIn />
    <SingUp />
  </div>
)

export default SignInAndSignUpPage
