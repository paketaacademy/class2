import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Card from './card'
import InputContainer from '../Input/inputContainer'
import { Papel } from './style.js'
import Title from './title'

export default function List() {

  return (

    <Papel>
      <CssBaseline />
      <Title />
      <Card />
      <Card />
      <Card />
      <Card />
      <InputContainer />
    </Papel>

  )
}

