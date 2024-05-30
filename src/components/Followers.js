import React, {useContext} from 'react'
import {GithubContext} from '../context/context'
import {Row, Col} from 'react-bootstrap'

function Followers() {
  const {followers} = useContext(GithubContext);

  return (
    <div>
      <div>
        {followers.map((follower, index )=> {
           const {avatar_url, login, html_url} = follower;

           return(
            <div key={index}>
              <img src={avatar_url} alt={login}/>
              <span>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </span>
            </div>
           )
        })}
      </div>
    </div>
  )
}



export default Followers