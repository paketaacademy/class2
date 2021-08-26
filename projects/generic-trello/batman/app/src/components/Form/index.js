import React from 'react'
import SelectLabel from './components/Label'
import SelectMembers from './components/Members'
import Send from './components/Send'
import { FormContainer, Title, Text } from './style'

export default function BasicTextFields() {

  return (
    <>
      <FormContainer noValidate autoComplete="off">
        <Title>Novo cartão</Title>
        <Text id="standard-basic" label="Título do Cartão" />
        <SelectMembers />
        <SelectLabel />
        <Send />
      </FormContainer>
    </>
  )
}