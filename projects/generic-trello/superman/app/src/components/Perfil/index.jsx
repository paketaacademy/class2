import React from 'react'
import ModalCreateBoard from '../ModalCreateBoard/index.jsx'
import { Container, Box, BoxContent, Redirect } from './style.js'

const Profile = () => {
  return (
    <Container >
      <Redirect to='#'>
        <Box elevation={3}>
          <BoxContent>Paketá Academy</BoxContent>
        </Box>
      </Redirect>
      <Redirect to='#'>
        <Box elevation={3}>
          <BoxContent>Faculdade</BoxContent>
        </Box>
      </Redirect>
      <ModalCreateBoard />
    </Container>
  )
}


export default Profile