import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getToken } from '../../services/auth.js'
import Header from '../../components/Header'
import { BoardCtn, Container, UserBoards, UserDatas } from './styles'

export const Home = () => {
  const [userData, setUserData] = useState({
    user: "",
    email: ""
  })
  const [boards, setBoards] = useState([])
  const urlProfile = "http://localhost:3030/profile"
  const urlUserBoards = "http://localhost:3030/board"

  useEffect(() => {
    axios.get(urlProfile, { headers: { "auth-token": getToken() } })
      .then(response => {
        const responseAboutUserData = response.data
        console.log(responseAboutUserData)
        setUserData({
          user: `${responseAboutUserData.firstName} ${responseAboutUserData.lastName}`,
          email: responseAboutUserData.email
        })
        console.log(userData)
      })

    axios.request({
      method: "GET",
      url: urlUserBoards,
      headers: {
        "auth-token": getToken()
      }
    }).then(response => {
      const responseAboutUserBoards = response.data
      console.log(responseAboutUserBoards)
      setBoards(responseAboutUserBoards)
    })
  }, [])

  const onClick = (e, id) => {

    console.log(id)
    window.location = `/board/${id}`
  }


  const renderBoards = (item, index) => {
    return (
      <BoardCtn onClick={(event) => onClick(event, item._id)} key={index}>
        <h2>{item.title}</h2>
      </BoardCtn>
    )
  }


  return (
    <>
      <Header />
      <Container>
        <UserDatas>
          <div className="user-data">
            <h2 className="user-data--h2">{`${userData.user}`}</h2>
            <h3 className="user-data--h3">{userData.email}</h3>
          </div>
        </UserDatas>
        <UserBoards>
          {boards.length > 0 &&
            boards.map(renderBoards)}
        </UserBoards>
      </Container>
    </>
  )
}