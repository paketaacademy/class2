import React from 'react'
import { useState, useEffect } from 'react'
import { ContainerStyled, BoxStyled } from './Style.js'
import Avatar from '@material-ui/core/Avatar'
import { getToken } from '../../Services/auth.js'
import Skeleton from '@material-ui/lab/Skeleton'

function UserDetails() {

  const [list, setList] = useState('')
  const [loading, setLoading] = useState(true)
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    setLoading(true)
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
        setList(data.email)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [API, setList])
  
  return (
    <ContainerStyled>
      <BoxStyled>
        <div>{loading ? <Skeleton width={200}  height={25} /> : list}</div>
      </BoxStyled>
      <BoxStyled>
        <Avatar>U</Avatar>
      </BoxStyled>
    </ContainerStyled>
  )
}

export default UserDetails
