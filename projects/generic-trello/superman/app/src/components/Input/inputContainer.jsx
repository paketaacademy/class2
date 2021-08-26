import React, { useState } from 'react'
import { Typography, Collapse } from '@material-ui/core'
import InputCard from './InputCard.jsx'
import { Container, ContainerAdd } from './style.js'

export default function InputContainer({ listId, type }) {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <ContainerAdd
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === 'card' ? '+ Adicionar um cartão' : '+ Adicionar uma lista'}
          </Typography>
        </ContainerAdd>
      </Collapse>
    </Container>
  )
}