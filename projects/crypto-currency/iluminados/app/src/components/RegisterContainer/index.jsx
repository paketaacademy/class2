import React from 'react'
import styled from 'styled-components'
import { Btn } from '../Button'
import { Container, TxtField, FormContainer } from '../LoginContainer'

const DivContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const FormContainerRegister = () => {
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
        <DivContainerBtn>
          <Btn variant="contained" color="primary">Registrar</Btn>
          <Btn color="inherit">Cancelar</Btn>
        </DivContainerBtn>
      </FormContainer>
    </Container>
  )
}