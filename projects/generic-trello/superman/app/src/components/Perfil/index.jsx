import React from 'react'
import { useState, useEffect } from 'react'
import ModalCreateBoard from '../ModalCreateBoard/index.jsx'
import Skeleton from '@material-ui/lab/Skeleton'
import { getToken } from '../../Services/auth'
import { Container, Box, BoxContent, Redirect } from './style.js'

const Profile = () => {

  const API = process.env.REACT_APP_API_URL
  const [boards, setBoards] = useState({})  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(
      `${API}/board`,
      {
        method: 'get',
        headers: new Headers({
          'auth-superman': getToken(),
        })
      },
    )
      .then(async response => {
        const data = await response.json()
        setBoards(data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [API, setBoards])

  const BoardView = () => {
    return (
      boards.length > 0 && boards.map((conteudo, index) => {
        return (
          <Redirect to={`/quadro/${conteudo._id}`}>
            <Box elevation={3}>
              <BoxContent>{conteudo.title}</BoxContent>
            </Box>
          </Redirect>
        )
      })
    )
  }

  const renderSkeleton = () => {
    return (
      new Array(5).fill().map((row, i) => {
        return (
          <>
            <Skeleton className='StyledSkeleton' variant="rect" width={50} height={100} />
          </>
        )
      })
    )
  }

  return (
    <Container >
      {loading ? renderSkeleton() : BoardView()}
      <ModalCreateBoard />
    </Container>
  )
}

export default Profile