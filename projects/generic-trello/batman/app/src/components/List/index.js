import React, { useEffect, useState } from 'react'
import { Container, Header, Title, Button, Ul } from './styles'
import { MdAdd } from 'react-icons/md'
import DeleteIcon from '@material-ui/icons/Delete'
import Card from '../Card'
import Form from '../Form'
import Dialog from '@material-ui/core/Dialog'
import axios from 'axios'
import { getToken } from '../../Services/auth'

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

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3030/list`, { headers: { "auth-token": getToken() } , data:{ listId: data._id } })
      .then(response => {
        console.log(response)
        window.location.reload()
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <>

      <Container done={true}>

        <Header>

          <Title>{data.title}</Title>
          <div>
            {true && (
              <Button className='teste' type='button' onClick={handleClickOpen} >
                <MdAdd size={24} />
              </Button>
            )}
            <Button type='button' onClick={handleDelete} idlist={data._id} >
              {console.log(data._id)}
              <DeleteIcon/>
            </Button>   
          </div>  
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