import React from "react"
import { Container, Image, Title, Exit } from './styles.js'
import { logout } from '../../services/auth'

export default function Header() {


  const handleLogout = (e) => {
    logout()
  }

  return (
    <Container>
      <Image src="https://image.flaticon.com/icons/png/128/280/280772.png" alt="Icone do Batman"></Image>
      <Title>Bat-Trello</Title>
      
     <Exit
        onClick={handleLogout}>
      </Exit>
    </Container>

  )
}