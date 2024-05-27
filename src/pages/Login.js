import React from 'react'
import loginImg from "../images/login-img.svg"

function Login() {
  return (
    <div>
      <img src={loginImg} alt="github user"/>
      <h1>Gthub User</h1>
      <button>Login</button>
    </div>
  )
}

export default Login