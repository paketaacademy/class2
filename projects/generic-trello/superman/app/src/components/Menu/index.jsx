import React from 'react'
import { useState, useEffect } from 'react'
import { NavBar, Item, TitleBox, Home, Linked, DetailsUser, Image, BoxUser } from './style.js'
import { getToken } from '../../Services/auth'
import Logout from '../Logout'


function Menu() {

  const API = process.env.REACT_APP_API_URL

  const [list, setList] = useState('')

  useEffect(() => {
    fetch(
      `${API}/profile`,
      {
        method: 'get',
        headers: new Headers({
          'auth-superman': getToken(),
        })
      },
    )
      .then(async response => {
        const data = await response.json()
        setList(data)
      })
      .catch(error => console.log(error))
  }, [API, setList])
  console.log(list)
  return (

    <NavBar>

      <Item>
        <Linked to='/perfil'>
          <Home />
        </Linked>
      </Item>

      <Item>
        <TitleBox>
          SuperTrello
        </TitleBox>
      </Item>

      <Item>
        <DetailsUser>
          <BoxUser>
            <Image>U</Image>
            <div>
              {list.name}
            </div>
            <div>
              {list.email}
            </div>
          </BoxUser>
          <Logout />
        </DetailsUser>
      </Item>
    </NavBar>


  )
}

export default Menu