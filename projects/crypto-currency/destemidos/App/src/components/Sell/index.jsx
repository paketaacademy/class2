import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { useParams } from "react-router"
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import { Container, BoxDetails } from "./style.js"
import { getToken } from '../../Services/auth.js'
import './style.css'

function Sell() {
  let { id } = useParams()
  const API = process.env.REACT_APP_API_URL
  const [list, setList] = useState({})

  useEffect(() => {
    fetch(
      `${API}/profile`,
      {
        method: 'get',
        headers: new Headers({
          'auth-token': getToken(),
        })
      },
    )
      .then(async response => {
        const data = await response.json()
        setList(data)
      })
      .catch(error => console.log(error))
  }, [API, setList])
  
  const listItems = () => {
    return (

      <div>
        <div >
          <h3>Nome da Criptomoeda:</h3>
          Axios
        </div>
        <div>
          <h3>Preço da Criptomoeda (US$):</h3>
          0.33
        </div>
        <div>
          <h3>Valor para venda Criptomoeda (BTC):</h3>
          1.33
        </div>
      </div>
    )
  }
  return (
    <Container>
      <h1>Detalhes da Venda da Cryptomoeda</h1>
      <BoxDetails index={id}>
        {listItems()}
        <form className="StyledPositions">
          <TextField
            label="Valor em criptomoeda"
            color="secondary"
            type="number"
            id="buyPrice"
            name="buyPrice"
            inputProps={{
              min: 0,
            }}
          />

          <button className='StyledButtonVender'>
            <div>Vender</div><div><CompareArrowsIcon /></div>
          </button>
          <div className='containerCredit'>
            <div className='titleContainerCredit'>
              <span className='titleCredit'>Saldo em conta (Criptomoeda)</span>
            </div>
            <div>
              <div className='creditUser'>BTC 3.000,00</div>
            </div>
          </div>
        </form>
      </BoxDetails>
    </Container>
  )
}

export default Sell