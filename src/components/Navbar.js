import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
  const isUser = isAuthenticated && user;
  
  console.log(isAuthenticated, user, isLoading)
  console.log(window.location.origin)
  return (
    <div>
      <div>
        {isUser && user.picture &&  <img src={user.picture} alt={user.name}/>}
        {isUser && user.name && <h4>Welcome, <strong>{user.name.toLocaleUpperCase()}</strong></h4>}
        {isUser ? (
          <button  onClick={() =>
            logout({
              logoutParams: {
                returnTo: `${window.location.origin}/Github-Users/#`
              }
            })
          }>logout</button>
        ):(
          <button onClick={loginWithRedirect}>login</button>
        )}
 
      </div>
    </div>
  )
}

export default Navbar