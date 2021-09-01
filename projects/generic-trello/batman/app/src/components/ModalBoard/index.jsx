import React, { useState } from 'react'
import { AddBoard, StyledModal, TxtField, Form, Div, CreateButton, } from './styles'
import { MdAdd } from "react-icons/md"
import axios from 'axios'
import { getToken } from '../../Services/auth'

export const ModalBoard = () => {
  const [open, setOpen] = useState(false)
  const [inputs, setInputs] = useState({
    title: "",
    description: ""
  })
  const handleWithInputs = (e) => {
    inputs[e.target.name] = e.target.value
    setInputs(inputs)
  }
  const handleWithSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3030/board", inputs, { headers: { "auth-token": getToken() } })
      .then(response => {
        setOpen(false)
        window.location.reload()
      }).catch(error => {
        console.log(error)
      })
  }
  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }
  return (
    <>
      <AddBoard variant="contained" onClick={openModal}>
        <MdAdd size={20} />
        Adicionar Board
      </AddBoard>
      <StyledModal
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel="Cirar novo board"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.65)'
          },
        }}
      >
        <Form onSubmit={handleWithSubmit}>
          <TxtField
            variant="outlined"
            size="small"
            label="Título do board"
            name="title"
            onChange={handleWithInputs}
            required
          />
          <TxtField
            variant="outlined"
            label="Descrição do board"
            size="small"
            name="description"
            rows={4}
            onChange={handleWithInputs}
            multiline
            required
          />
          <Div>
            <CreateButton>
              <AddBoard variant="contained"  type="submit">
                Criar
              </AddBoard>
            </CreateButton>
        </Div>
        </Form>
      </StyledModal>
    </>
  )
}