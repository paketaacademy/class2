import React, { useEffect, useState } from 'react'
import { Container , Header , Title , Button , Ul} from './styles'
import { MdAdd } from 'react-icons/md'
import Card from '../Card'
import Form from '../Form'
import Dialog from '@material-ui/core/Dialog'
import axios from 'axios'
import { getToken } from '../../services/auth'

export default function List({ data, idList: listIndex }) {
  console.log("data", data._id)
  const [cards, setCards] = useState([])
  const urlCards= `http://localhost:3030/card/list/${data._id}`

  useEffect(()=>{
    axios.get(urlCards,{ headers: { "auth-token": getToken() } })
    .then(response=>{
      const responseAboutCards = response.data
      console.log("cards",responseAboutCards)
      setCards(responseAboutCards)
    }).catch(
      (error)=>{
        console.log(error)
      }
    )
  }, [urlCards, setCards])

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <Container done={true}>   
      <Header>
        <Title>{data.title}</Title>
        {true && (
          <Button type='button' onClick={handleClickOpen}>
            <MdAdd size={24} color='#fff' /> 
          </Button>
        )}
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
          <Form open={open} />
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
    
  )
}