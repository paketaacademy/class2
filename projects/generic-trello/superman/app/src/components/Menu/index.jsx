import React from 'react'
import { useState, useEffect } from 'react'
import { NavBar, Item ,TitleBox , Home, Linked, DetailsUser, Image, BoxUser} from './style.js'
import { getToken } from '../../Services/auth'
import Logout from '../Logout/index.jsx'


function Menu() {
    const API = process.env.REACT_APP_API_URL
    const [user, setUser] = useState('')

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
                setUser(data)
            })
            .catch(error => console.log(error))
    }, [API, setUser])
    console.log(user,'oi')

    return (
      
            <NavBar>

                <Item>
                    <Linked to='/'>
                    <Home/>
                    </Linked>
                </Item>

                <Item>
                    <TitleBox>
                    Trello
                    </TitleBox>
                    
                </Item>

                <Item>
                    <DetailsUser>
                    <BoxUser>
                    <Image>U</Image>
                    <div>
                    Jose da silva
                    </div>
                    </BoxUser>
                    <Logout/>
                    </DetailsUser>
                </Item>
            </NavBar>

       
    )
}

export default Menu