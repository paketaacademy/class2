import axios from 'axios'
import React, { useState } from 'react'
import { getToken } from '../../Services/auth'
import SelectLabel from './components/Label'
import SelectMembers from './components/Members'
import Send from './components/Send'
import { FormContainer, Title, Text } from './style'


export default function BasicTextFields({ idlist, handleClose }) {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    listId: idlist
  })

  const handleChange = (e) => {
    inputs[e.target.name] = e.target.value
    setInputs(inputs)
  }

  const handleClick = (e) => {
      e.preventDefault()
    console.log("entrou")
    axios.post(`http://localhost:3030/card`, inputs, { headers: { "auth-token": getToken() } })
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      }).finally(()=>{
        handleClose()
        window.location.reload()
      })


  }

  return (
    <>
      <FormContainer noValidate autoComplete="off" onSubmit={handleClick}>
        <Title>Novo cartão</Title>
        <Text onChange={handleChange} id="standard-basic" label="Título do Cartão" name="title" />
        <Text onChange={handleChange} id="standard-basic" label="Descrição" name="description" />
        <SelectMembers />
        <SelectLabel />
        <Send type="submit" />
      </FormContainer>
    </>
  )
}