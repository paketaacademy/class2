import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <PaperDiv>
        <StyledAvatar />
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <Form noValidate>
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