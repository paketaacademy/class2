import React, { useEffect, useState } from 'react'
import { Container, Header, Title, Button, Ul, ButtonNew } from './styles'
import { MdAdd } from 'react-icons/md'
import Card from '../Card'
import Form from '../Form'
import Dialog from '@material-ui/core/Dialog'
import FormList from '../Form-List'
import axios from 'axios'
import { getToken } from '../../services/auth'
import Modal from '@material-ui/core/Modal'

export default function List({ data, idList: listIndex }) {

  const [cards, setCards] = useState([])
  const urlCards = `http://localhost:3030/card/list/${data._id}`

  useEffect(() => {
    axios.get(urlCards, { headers: { "auth-token": getToken() } })
      .then(response => {
        const responseAboutCards = response.data
        setCards(responseAboutCards)
      }).catch(
        (error) => {
          console.log(error)
        }
      )
  }, [urlCards, setCards])

  const [open, setOpen] = React.useState(false)
  const [openList, setOpenList] = useState(false)

  const handleClickOpenList = () => {
    setOpenList(true)
  }

  const handleCloseList = () => {
    setOpenList(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ButtonNew type="button" onClick={handleClickOpenList}>
        <MdAdd size={24} color='#fff' />
      </ButtonNew>
      <Modal
        open={openList}
        onClose={handleCloseList}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <FormList open={openList} idBoard={data.idBoard} handleClose={handleClose} />
      </Modal>
      <Container done={true}>

        <Header>

          <Title>{data.title}</Title>
          {true && (
            <Button type='button' onClick={handleClickOpen} >
              <MdAdd size={24} color='#fff' />
            </Button>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Form open={open} idlist={data._id} handleClose={handleClose} />
          </Dialog>
        </Header>

        <Ul>
          {cards.map((card, index) => (
            <Card
              key={card._id}
              listIndex={listIndex}
              index={index}
              data={card}
            />
          ))}
        </Ul>
      </Container>

    </>
  )
}