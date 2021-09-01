import React from "react"
import { Container, Image, Title, Exit } from './styles.js'
import { logout } from '../../Services/auth'
import { Link } from "react-router-dom"

export default function Header() {


  const handleLogout = (e) => {
    logout()
  }

  return (
    <Container>
      <Link to="/home">
        <Image src="https://image.flaticon.com/icons/png/128/280/280772.png" alt="Icone do Batman" title="Bat Trello" />
      </Link>
      <Title>BAT-TELLO</Title>
      <div title="Sair">
        <Exit
          onClick={handleLogout} />
      </div>
    </Container>
  )
}