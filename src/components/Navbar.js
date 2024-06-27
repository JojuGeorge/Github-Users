import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
  console.log(isAuthenticated, user, isLoading)
  return (
    <div>
      <div>
        <button onClick={loginWithRedirect}>login</button>
        <button onClick={()=>{logout({returnTo:window.location.origin})}}>logout</button>
      </div>
    </div>
  )
}

export default Navbar