import React, {useContext} from 'react'
import { GithubContext } from '../context/context'

function Info() {
  const data = useContext(GithubContext)
  return (
    <div>Info {data}</div>
  )
}

export default Info