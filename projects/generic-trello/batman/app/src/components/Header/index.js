import React from "react"
import { Container, Image, Title } from './styles'
import './styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { logout } from '../../services/auth'

export default function Header() {
  return (
    <Container>
      <Image src="https://image.flaticon.com/icons/png/128/280/280772.png" alt="Icone do Batman"></Image>
      <Title>Bat-Trello</Title>
    </Container>


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