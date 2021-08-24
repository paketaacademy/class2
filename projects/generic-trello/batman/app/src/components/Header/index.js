import React from "react"
import { Container } from './styles'
import './styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { logout } from '../../services/auth'

export default function Header() {

  const handleLogout = (e) => {
    logout()
  }

  return (
    <>
      <Container>
        <h1>Bat-Trello</h1>
          <ExitToAppIcon 
            onClick={handleLogout}>
          </ExitToAppIcon>    
      </Container>
    </>
  )
}