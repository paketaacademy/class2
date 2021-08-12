import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { Container, Imagem, BoxPage, StyledButton, LinhaInserir, Insert } from './Style.js'
import { getToken } from '../../Services/auth.js'

function Inserir() {

  const API = process.env.REACT_APP_API_URL

  const [value, setValue] = useState({
    balance: 0
  })

  const [open, setOpen] = useState(false)
  const [resAPI, setResAPI] = useState('')
  const [severity, setSeverity] = useState('')

  const handleChange = e => {
    value[e.target.name] = e.target.value
    setValue(value)
  }

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`${API}/balance`,value,
    {      
      headers: {
        'auth-token': getToken(),          
      }
    })
    .then(response => {
      setResAPI(response.data)
      setSeverity('success')
      setOpen(true)
    }).catch(err => {
      setResAPI(err.response.data)
      setSeverity('error')
      setOpen(true)
    })
  }

  const handleClose = (event) => {
    setOpen(false)
  }

  return (
    <BoxPage>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity}>
          {resAPI}
        </Alert>
      </Snackbar>
      <Container><img width='200' src='https://image.flaticon.com/icons/png/512/1248/1248430.png' /></Container>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Container>

          <TextField
            label="Número do Cartão"
            color="secondary"
            disabled='true'
          />
          <TextField
            label="Nome do Titular"
            color="secondary"
            disabled='true'
          />
          <LinhaInserir>
            <Insert
              label="Validade"
              color="secondary"
              disabled='true'
            />
            <Insert
              label="CVV"
              color="secondary"
              disabled='true'
            />
          </LinhaInserir>
          <TextField
            label="Valor da compra"
            color="secondary"
            type="number"
            required
            min="0.00"
            step=".10"
            onChange={handleChange}
            id="balance"
            name="balance"
            inputProps={{
              min: 0,
            }}  
          />
          <StyledButton type="submit" variant="contained" color="primary">
            Realizar pagamento{' '}<MonetizationOnIcon />
          </StyledButton>
        </Container>
      </form>
    </BoxPage>
  )
}

export default Inserir