import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { useParams } from "react-router"
import Button from '@material-ui/core/Button'
import { Container, BoxDetails } from "./style.js"
function Purchase() {
  let { name, price, amountCoins } = useParams()

  return (
    <Container>
      <h1>Detalhes da Cryptomoeda</h1>
      <BoxDetails>
        <div>
          <h3>Tipo de Criptomoeda:</h3>
          {name}
        </div>
        <div>
          <h3>Preço da Criptomoeda (US$):</h3>
          {price}
        </div>
        <div>
          <h3>Quantidade de Criptomoeda:</h3>
          {amountCoins}
        </div>
        <TextField
          label="Insere o valor em US$"
          color="secondary"
          type='number'
        />
        <Button variant="contained" color="primary">
          Comprar
        </Button>
      </BoxDetails>
    </Container>
  )
}

export default Purchase
