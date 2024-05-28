import React, {useContext} from 'react'
import { GithubContext } from '../context/context'
import {GoRepo, GoCodeSquare} from 'react-icons/go';
import {FiUserPlus, FiUsers, FiuserPlus} from 'react-icons/fi';



function Info() {
  const {githubUser} = useContext(GithubContext);

  const {public_repos, followers, following, public_gists} = githubUser;
  
  console.log(githubUser)
  console.log(public_repos, followers, following, public_gists)

  const items = [
    {
      id:1,
      icon: <GoRepo/>,
      label: 'repos',
      value: public_repos,
    },{
      id:2,
      icon: <FiUsers/>,
      label: 'followers',
      value: followers,
    },{
      id:3,
      icon: <FiUserPlus/>,
      label: 'following',
      value: following,
    },{
      id:4,
      icon: <GoCodeSquare/>,
      label: 'gists',
      value: public_gists,
    }
  ]

  return (
    <section>
      <div>
        {
          items.map(item => {
            return <Item key={item.id} {...item}></Item>
          })
        }
      </div>
    </section>
  )
}

const Item = ({icon, label, value})=>{
  return (
    <article>
      <span>{icon}</span>
      <h3>{value}</h3>
      <p>{label}</p>
    </article>
  )
}

export default Info