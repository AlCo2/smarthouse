import React from 'react'
import { signIn } from 'next-auth/react';
const Login = () => {
  return (
    <>
      <div className='loginPage'>
        <div className="loginBar">
          <div className="navBrand">
            <h1>Smart</h1>
            <h1 className="brand">Ho</h1>
          </div>
          <div>
            <button className='loginBtn' onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;