import React from 'react'
import {Navbar, Search, Info, User, Repos} from '../components'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Stack gap={2}>      
          {/* <Navbar/> */}
          {/* <Search/> */}
          <Info/>
          <User/>
          {/* <Repos/> */}
        </Stack>
      </Container>
    </div>
  )
}
