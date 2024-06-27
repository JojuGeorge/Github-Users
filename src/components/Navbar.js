import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
  console.log(isAuthenticated, user, isLoading)
  console.log(window.location.origin)
  console.log(loginWithRedirect)
  return (
    <div>
      <div>
        <button onClick={loginWithRedirect}>login</button>
        <button  onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: `${window.location.origin}/Github-Users/#`
                    }
                  })
                }>logout</button>
      </div>
    </div>
  )
}

export default Navbar