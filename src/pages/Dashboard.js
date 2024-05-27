import React from 'react'
import {Navbar, Search, Info, User, Followers, Repos} from '../components'

export default function Dashboard() {
  return (
    <div>
      <main>
        <Navbar/>
        <Search/>
        <Info/>
        <User/>
        <Followers/>
        <Repos/>
      </main>
    </div>
  )
}
