import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { BoxPapper, AvatarLogin, Form, Submit } from './style.js'

export default function SignUp() {

  const handleChange = e => {
    inputs[e.target.name] = e.target.value
    setInputs(inputs)
    editStateBtn(inputs)
  }

  const [stateBtn, setStateBtn] = useState(true)

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const editStateBtn = i => i.password !== i.confirmPassword || i.password === '' ? setStateBtn(true) : setStateBtn(false)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <BoxPapper >
        <AvatarLogin>
          <LockOutlinedIcon />
        </AvatarLogin>
        <Typography component="h1" variant="h5">
          Cadastrar
        </Typography>
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Nome"
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