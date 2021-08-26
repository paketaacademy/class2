import React from "react"
import { Container, Image, Title } from './styles'
import './styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { logout } from '../../Services/auth'

export default function Header() {
  const handleLogout = (e) => {
    logout()
  }
  return (
    <Container>
      <Image src="https://image.flaticon.com/icons/png/128/280/280772.png" alt="Icone do Batman"></Image>
      <Title>Bat-Trello</Title>
      <ExitToAppIcon
        onClick={handleLogout}>
      </ExitToAppIcon>
    </Container>
  )
}