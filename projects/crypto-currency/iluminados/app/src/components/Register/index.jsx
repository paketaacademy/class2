import React from 'react'
import { Button } from '../Button'
import { Container, FormContainer } from '../ContainerForms'
import { TxtField } from '../TxtField'
import { ButtonContainer } from './styles'
import { Link } from 'react-router-dom'

export const Register = () => {

  return (
    <Container>
      <FormContainer>
        <h2>Registrar</h2>
        <TxtField
          id="standard-required"
          label="Nome"
          variant="outlined"
          size="small"
          required
        />
        <TxtField
          id="standard-required"
          label="Sobrenome"
          variant="outlined"
          size="small"
          required
        />
        <TxtField
          id="standard-required"
          label="E-mail"
          variant="outlined"
          size="small"
          required
        />
        <TxtField
          id="standard-required"
          label="Cofirm e-mail"
          variant="outlined"
          size="small"
          required
        />
        <TxtField
          id="standard-required"
          label="Password"
          variant="outlined"
          size="small"
          type="password"
          required
        />
        <TxtField
          id="standard-required"
          label="Confirm password"
          variant="outlined"
          size="small"
          type="password"
          required
        />
        <ButtonContainer>
          <Button Variant="contained" Color="primary">Registrar</Button>
          <Link to="/logar"><Button Color="transparent">Cancelar</Button></Link>
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
}