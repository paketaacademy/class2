import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { Container, Image, BoxPapper, AvatarLogin, Form, Submit } from './style.js'

export default function SignInSide() {

  return (
    <Container>
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
          <Form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
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