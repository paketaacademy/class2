import React, { useState } from 'react'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { login } from '../../Services/auth'
import { PaperDiv, StyledAvatar, Form, SubmitButton } from './styles'
import './styles'

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

export default function SignInSide() {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  const [open, setOpen] = useState(false)
  const [resAPI, setResAPI] = useState('')
  const [severity, setSeverity] = useState('')

  const handleChange = (e) => {
    inputs[e.target.name] = e.target.value
    setInputs(inputs)
  }

  const Alert = props => {

    return <MuiAlert elevation={6} variant="filled" {...props} />
  }
  const handleClose = (event) => {
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3030/login', inputs).then(response => {
      setResAPI(response.data)
      setSeverity('success')
      let myHeaders = response.headers['auth-token']
      login(myHeaders)
      setOpen(true)
      
    }).catch(err => {
      setResAPI(err.message)
      setSeverity('error')
      setOpen(true)
    })
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
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />

          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={SubmitButton}
          >
            Fazer Login
          </SubmitButton>
          <Grid container>
            <Grid item xs>              
            </Grid>
            <Grid item>
              <Link href="/registrar" variant="body2">
                {"Não possui cadastro? Cadastrar-se"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </PaperDiv>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}