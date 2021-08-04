import React, { useState } from 'react'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { PaperDiv, StyledAvatar, Form, SubmitButton, DivContainer } from './style.js'
import './style.css'

const API = process.env.REACT_APP_API_URL

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

export default function SignIn() {

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
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event) => {
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${API}/singin`, inputs).then(response => {
      setResAPI(response.data)
      setSeverity('success')
      setOpen(true)
    }).catch(err => {
      setResAPI(err.response.data)
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
          Sign in
        </Typography>
        <Form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
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
          >
            Sign In
          </SubmitButton>
          <Grid container>
            <DivContainer>
              <div>
                <Link className='insert--underline' href="#" variant="body2">
                  Forgot password?
                </Link>
              </div>
              <div>
                <Link className='insert--underline' to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </div>
            </DivContainer>
          </Grid>
        </Form>
      </PaperDiv>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
