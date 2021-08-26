import React from "react"

import PostAddIcon from '@material-ui/icons/PostAdd'
import { Container, Image, Title, SubmitButton } from './styles.js'
import { useTheme } from '@material-ui/core/styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { logout } from '../../Services/auth'

export default function Header() {
  const theme = useTheme()
  const handleLogout = (e) => {
    logout()
  }
  return (
    <Container>
      <Image src="https://image.flaticon.com/icons/png/128/280/280772.png" alt="Icone do Batman"></Image>
      <Title>Bat-Trello</Title>
      
        <SubmitButton   
          
          style={(theme)}
          color="botton"
          variant="outlined" 
          startIcon={<PostAddIcon />}
        >
          
        </SubmitButton>
      
      <ExitToAppIcon
        onClick={handleLogout}>
      </ExitToAppIcon>
    </Container>

  )
}