import React, { useState } from 'react'
import { AddBoard, StyledModal, TxtField, Form } from './styles'
import { MdAdd } from "react-icons/md"
import axios from 'axios'
import { getToken } from '../../services/auth'

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
        <MdAdd size={30} />
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
          <div className="actions-buttons">
            <div className="create-button-container">
              <AddBoard variant="contained" bgcolor="rgb(255, 255, 255)" hovercolor="rgb(240, 240, 240)" type="submit">
                Criar
              </AddBoard>
            </div>
            <div className="cancel-button-container">
              <AddBoard variant="contained" bgcolor="rgb(255, 124, 124)" hovercolor="rgb(250, 89, 89)" onClick={closeModal} fontcolor="rgb(255, 255, 255)">
                Cancelar
              </AddBoard>
            </div>

          </div>
        </Form>
      </StyledModal>
    </>
  )
}