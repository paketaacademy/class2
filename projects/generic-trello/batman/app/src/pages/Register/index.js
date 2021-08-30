import React, { useState } from 'react'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import './style'
import { PaperDiv, StyledAvatar, Form, SubmitButton } from './style.js'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function SignUp() {

  const handleChange = e => {
    inputs[e.target.name] = e.target.value
    setInputs(inputs)

  }

  const [open, setOpen] = useState(false)
  const [resAPI, setResAPI] = useState('')
  const [severity, setSeverity] = useState('')
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })



  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:3030/register', inputs).then(response => {
      setResAPI(response.data.message)
      setSeverity('success')
      setOpen(true)
      setTimeout(() => {
        window.location = "/"
      }, 2500);
    }).catch(err => {
      setResAPI(err)
      setSeverity('error')
      setOpen(true)
    })
  }

  const handleClose = (event) => {
    setOpen(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity}>
          {resAPI}
        </Alert>
      </Snackbar>
      <CssBaseline />
      <PaperDiv>
        <StyledAvatar />
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <Form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Primeiro Nome"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Endereço de E-mail"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={SubmitButton}
          >
            CADASTRAR
          </SubmitButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to='/conectar' variant="body2">
                Já possui cadastro? Entrar
              </Link>
            </Grid>
          </Grid>
        </Form>
      </PaperDiv>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}