import React, { useState, useEffect } from 'react'
import { Button } from '../Button'
import { CoinName, PaperStyled, AmountField } from './styles'
import { useParams } from 'react-router'
import axios from 'axios'
import { getToken, TOKEN_KEY } from '../../Services/auth'

export const CryptoCoin = () => {
  const [coin, setCoin] = useState(
    {
      initials: "",
      coinName: "",
      price: 0,
    }
  )
  const [amount, setAmount] = useState(0)
  const [finalValue, setFinalValue] = useState(0)
  let { id } = useParams()
  useEffect(() => {
    axios.get("http://localhost:3030/market", { headers: { "Authorization": `${TOKEN_KEY} ${getToken()}` } })
      .then(response => {
        let res = response.data.data
        res.map((r) => {
          if (parseInt(id) === r.id) {
            setCoin(
              {
                initials: r.s,
                coinName: r.n,
                price: r.p
              }
            )
          }
        })
      })
  }, [])

  return (
    <>
      <CoinName>{coin.coinName}({coin.initials})</CoinName>
      <PaperStyled square={true}>
        <div className="coin-container">
          <p class="coin-price__p">Valor atual US$:<span> {(coin.price)}</span></p>
          <div className="amount-container">
            <p className="amount__p">Quantidade:</p>
            <AmountField type="number" defaultValue={0} onChange={e => setAmount(e.target.value)} InputProps={{ inputProps: { min: 0 } }} />
          </div>
          <p>Total da compra US$: <span>{(parseInt(amount) * coin.price).toLocaleString()}</span></p>
          <div className="button-container">
            <Button Color="primary" Variant="contained">Comprar</Button>
          </div>
        </div>

      </PaperStyled>
    </>
  )
}