import React, { useState } from 'react'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { Container, Image, BoxPapper, AvatarLogin, Form, Submit } from './style.js'
import { login } from '../../Services/auth.js'

const API = process.env.REACT_APP_API_URL

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
    axios.post(`${API}/login`, inputs).then(response => {
      setResAPI(response.data)
      setSeverity('success')
      setOpen(true)
      let myHeaders = response.headers['auth-superman']
      login(myHeaders)
    }).catch(err => {
      setResAPI(err.response.data)
      setSeverity('error')
      setOpen(true)
    })
  }

  console.log(inputs)

  return (
    <Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity}>
          {resAPI}
        </Alert>
      </Snackbar>
      <CssBaseline />
      <Image />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <BoxPapper>
          <AvatarLogin>
            <LockOutlinedIcon />
          </AvatarLogin>
          <Typography component="h1" variant="h5">
            Sign in
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
              onChange={handleChange}
              autoComplete="current-password"
            />
            <Submit
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Entrar
            </Submit>
            <Grid container>
              <Grid item>
                <Link href="/cadastrar" variant="body2">
                  {"Não tem cadastro? cadastre-se aqui!"}
                </Link>
              </Grid>
            </Grid>
          </Form>
        </BoxPapper>
      </Grid>
    </Container>
  )
}