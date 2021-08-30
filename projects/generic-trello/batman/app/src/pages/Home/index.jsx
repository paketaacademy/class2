import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getToken } from '../../Services/auth.js'
import Header from '../../components/Header'
import { BoardCtn, Container, UserBoards, UserDatas, Button } from './styles'
import { ModalBoard } from '../../components/ModalBoard/index.jsx'
import { MdClear } from 'react-icons/md'

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
      setBoards(responseAboutUserBoards)
    })
  }, [])

  const handleClick = (e, id) => {
    window.location = `/board/${id}`
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    axios.delete(`http://localhost:3030/board/${id}`, { headers: { "auth-token": getToken() } })
      .then(response => {
        window.location.reload()
      }).catch((err) => {

      })
  }


  const renderBoards = (item, index) => {
    return (
      <>
        <BoardCtn onClick={(event) => handleClick(event, item._id)} key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </BoardCtn>
        <Button onClick={(event) => handleDelete(event, item._id)} key={index} >
          <MdClear size={12} color='#fff' />
        </Button>
      </>
    )
  }


  return (
    <>
      <Header />
      <Container>
        <div className="user-data-container">
          <UserDatas>
            <div className="user-data">
              <h2 className="user-data--h2">{`${userData.user}`}</h2>
              <h3 className="user-data--h3">{userData.email}</h3>
            </div>
          </UserDatas>
          <div>
            <ModalBoard />
          </div>
        </div>
        <UserBoards>
          {boards.length > 0 &&
            boards.map(renderBoards)}
        </UserBoards>
      </Container>
    </>
  )
}