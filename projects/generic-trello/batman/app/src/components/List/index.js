import React from 'react'
import { Container } from './styles'
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
      <header className='header--card'>
        <h2 className='title--card'>{data.title}</h2>
        {data.creatable && (
          <button className='button--add' type='button' onClick={handleClickOpen}>
            <MdAdd size={24} color='#fff' /> 
          </button>
        )}
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
          <Form open={open} />
         </Dialog> 
      </header>

      <ul className='ul--list'>
        {data.cards.map((card, index) => (
        <Card 
          key={card.id} 
          listIndex={listIndex}
          index={index} 
          data={card}
        /> 
        ))}
      </ul>
    </Container>
  )
}