import axios from 'axios'
import React, { useState } from 'react'
import { getToken } from '../../services/auth'
import SendNewList from './Send'
import { FormBox, Title, TextList } from './style'

const TextFieldList = ({ idBoard, handleClose })=>{
    const [inputs, setInputs] = useState({
        title: "",
        idBoard: idBoard
    })
    const handleChange = (e) => {
        inputs[e.target.name] = e.target.value
        setInputs(inputs)
      }
    
      const handleClick = (e) => {
          e.preventDefault()
        console.log("entrou")
        axios.post(`http://localhost:3030/list`, inputs, { headers: { "auth-token": getToken() } })
          .then(response => {
            console.log(response)
          }).catch(error => {
            console.log(error)
          }).finally(()=>{
            handleClose()
            window.location.reload()
          })
    
    
      }

    return(
        <>
            <FormBox noValidate autoComplete="off" onSubmit={handleClick}>
                <Title>Nova Lista</Title>
                <TextList onChange={handleChange} label="Titulo da lista" name="title" />
                <SendNewList type="submit" />
            </FormBox>
        </>
    )
}

export default TextFieldList