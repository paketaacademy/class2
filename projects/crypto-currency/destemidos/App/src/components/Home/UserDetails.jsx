import React from 'react'
import { ContainerStyled, BoxStyled } from './Style.js'
import Avatar from '@material-ui/core/Avatar'

function UserDetails() {
  return (
    <ContainerStyled>
      <BoxStyled>
      <div>João da Silva</div>
      <div>joao@gmail.com</div>
      
      </BoxStyled>
      <BoxStyled>
      <Avatar>U</Avatar>
      </BoxStyled>    
    </ContainerStyled>
  )
}

export default UserDetails
