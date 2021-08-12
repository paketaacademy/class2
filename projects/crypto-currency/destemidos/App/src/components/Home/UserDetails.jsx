import React from 'react'
import { useState, useEffect } from 'react'
import { ContainerStyled, BoxStyled } from './Style.js'
import Avatar from '@material-ui/core/Avatar'
import { getToken } from '../../Services/auth.js'

function UserDetails() {

  const [list, setList] = useState({})
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetch(
      `${API}/profile`,
      {
        method: 'get',
        headers: new Headers({
          'auth-token': getToken(),          
        })
      },
    )
      .then(async response => {
        const data = await response.json()
        console.log('data', data)
        setList(data)

      })
      .catch(error => console.log(error))
  }, [API, setList]);

  return (
    <ContainerStyled>
      <BoxStyled>
        <div>{list.emailUser}</div>
      </BoxStyled>
      <BoxStyled>
        <Avatar>U</Avatar>
      </BoxStyled>
    </ContainerStyled>
  )
}

export default UserDetails
