import React from 'react'
import { Container , Header , Title , Button , Ul} from './styles'
import { MdAdd } from 'react-icons/md'
import Card from '../Card'
import Form from '../Form'
import Dialog from '@material-ui/core/Dialog'

export default function List({ data, index: listIndex }) {

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <Container done={data.done}>   
      <Header>
        <Title>{data.title}</Title>
        {data.creatable && (
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
        {data.cards.map((card, index) => (
        <Card 
          key={card.id} 
          listIndex={listIndex}
          index={index} 
          data={card}
        /> 
        ))}
      </Ul>
    </Container>
  )
}