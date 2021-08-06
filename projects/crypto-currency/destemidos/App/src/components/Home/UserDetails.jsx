import React from 'react'
import { ContainerDiv, StyledAvatar, ButtonDiv } from './Style.js'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function UserDetails() {
  return (
    <ContainerDiv>
      <StyledAvatar>U</StyledAvatar>
      <div>João da Silva</div>
      <div>joao@gmail.com</div>
      <ButtonDiv>
        <Button variant="contained">Sair<ExitToAppIcon/></Button>
      </ButtonDiv>    
    </ContainerDiv>
  )
}

export default UserDetails
