import React, { useState } from 'react'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { BoxPapper, AvatarLogin, Form, Submit } from './style.js'

const API = process.env.REACT_APP_API_URL

export default function SignUp() {

  const handleChange = e => {
    inputs[e.target.name] = e.target.value
    setInputs(inputs)
    editStateBtn(inputs)
  }

  const [stateBtn, setStateBtn] = useState(true)

  const [open, setOpen] = useState(false)

  const [resAPI, setResAPI] = useState('')

  const [severity, setSeverity] = useState('')

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const editStateBtn = i => i.password !== i.confirmPassword || i.password === '' ? setStateBtn(true) : setStateBtn(false)

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`${API}/register`, inputs).then(response => {

      setResAPI(response.data)
      setSeverity('success')
      setOpen(true)
      
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)

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
    <Container component="main" maxWidth="xs">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity}>
          {resAPI}
        </Alert>
      </Snackbar>
      <CssBaseline />
      <BoxPapper >
        <AvatarLogin>
          <LockOutlinedIcon />
        </AvatarLogin>
        <Typography component="h1" variant="h5">
          Cadastrar
        </Typography>
        <Form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome Completo"
                onChange={handleChange}
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                onChange={handleChange}
                autoComplete="email"
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
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirme Senha"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>

          </Grid>
          <Submit
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={stateBtn}
          >
            Cadastrar
          </Submit>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Possui cadastro? Entre aqui!
              </Link>
            </Grid>
          </Grid>
        </Form>
      </BoxPapper>
    </Container>
  )
}