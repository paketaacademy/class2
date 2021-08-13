import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { useParams } from "react-router"
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { Container, BoxDetails } from "./style.js"
import { getToken } from '../../Services/auth.js'
import './style.css'

function Sell() {
  let { symbol } = useParams()
  const API = process.env.REACT_APP_API_URL
  const [list, setList] = useState({})
  const [quantCoin, setQuantCoin] = useState(0)
  const [dataCoin, setDataCoin] = useState({
    idCoin: 0,
    nameCoin: '',
    priceCoin: 0,
    quantSaleCoin: 0
  })

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
        data.cryptocurrencies.filter(number => {
          if(number.symbol == symbol) {
            setQuantCoin(number.quant)
          }
        })
      })
      .catch(error => console.log(error))
  }, [API, setList])

  const handleChange = e => {
    setDataCoin({
      ...dataCoin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    fetch(
      `${API}/datacoin/${symbol}`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setDataCoin({
          idCoin: data[0].marketPairs[0].asset_id,
          nameCoin: data[0].name,
          priceCoin: data[0].marketPairs[0].price
        })
      })
      .catch(error => console.log(error))
  }, [])
  
  const listItems = () => {
    return (

      <div>
        <div >
          <h3>Nome da Criptomoeda:</h3>
          {dataCoin.nameCoin}
        </div>
        <div>
          <h3>Preço da Criptomoeda (US$):</h3>
          {dataCoin.priceCoin}
        </div>
      </div>
    )
  }

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event) => {
    setOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`${API}/salecoin`, dataCoin,
      {
        headers: {
          'auth-token': getToken(),
        }
      }
    ).then(response => {
      setResAPI(response.data)
      setSeverity('success')
      setOpen(true)
    }).catch(err => {
      setResAPI(err.response.data)
      setSeverity('error')
      setOpen(true)
    })
  }

  const [open, setOpen] = useState(false)
  const [resAPI, setResAPI] = useState('')
  const [severity, setSeverity] = useState('')

  return (
    <Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity}>
          {resAPI}
        </Alert>
      </Snackbar>
      <h1>Detalhes da Venda da Cryptomoeda</h1>
      <BoxDetails index={list.idCoin}>
        {listItems()}
        <form className="StyledPositions" onSubmit={handleSubmit}>
          <TextField
            label="Quantidade criptomoeda"
            color="secondary"
            type="float"
            id="quantSaleCoin"
            name="quantSaleCoin"
            onChange={handleChange}
            inputProps={{
              min: 0,
            }}
          />

          <button className='StyledButtonVender'>
            <div>Vender</div><div><CompareArrowsIcon /></div>
          </button>
          <div className='containerCredit'>
            <div className='titleContainerCredit'>
              <span className='titleCredit'>Quantidade criptomoeda</span>
            </div>
            <div>
            <div className='creditCoin'>{quantCoin}</div>
            </div>
          </div>
        </form>
      </BoxDetails>
    </Container>
  )
}

export default Sell