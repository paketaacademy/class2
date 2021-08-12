  
import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { useParams } from "react-router"
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { Container, BoxDetails } from "./style.js"
import { getToken } from '../../Services/auth.js'
import './style.css'

function Purchase() {
  let { id } = useParams()
  const API = process.env.REACT_APP_API_URL

  const [idCripto, setIdCripto] = useState(0)
  const [nameCripto, setNameCripto] = useState('')
  const [priceCripto, setPriceCripto] = useState(0)
  const [priceBtcCripto, setPriceBtcCripto] = useState(0)

  const [value, setValue] = useState({
    idCoin: { idCripto },
    nameCoin: { nameCripto },
    buyPrice: 0,
    priceCoin: { priceCripto }
  })

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

  const [open, setOpen] = useState(false)
  const [resAPI, setResAPI] = useState('')
  const [severity, setSeverity] = useState('')

  const handleChange = e => {
    value[e.target.name] = e.target.value
    setValue(value)
  }

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  useEffect(() => {
    fetch(
      `${API}/markets`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        data.filter(number => {
          if (number.id == id) {
            setIdCripto(number.id)
            setPriceCripto(number.p)
            setPriceBtcCripto(number.p_btc)
            setNameCripto(number.n)
          }
        })
      })
      .catch(error => console.log(error))
  }, []);

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`${API}/buycoin`, value,
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

  const handleClose = (event) => {
    setOpen(false)
  }

  const listItems = () => {
    return (

      <div index={idCripto}>
        <div >
          <h3>Nome da Criptomoeda:</h3>
          {nameCripto}
        </div>
        <div>
          <h3>Preço da Criptomoeda (US$):</h3>
          {priceCripto}
        </div>
        <div>
          <h3>Preço da Criptomoeda (BTC):</h3>
          {priceBtcCripto}
        </div>
      </div>
    )
  }
  return (
    <Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity}>
          {resAPI}
        </Alert>
      </Snackbar>
      <h1>Detalhes da Cryptomoeda</h1>
      <BoxDetails index={id}>
        {listItems()}
        <form className="StyledPositions" onSubmit={handleSubmit}>
          <TextField
            label="Insere o valor em US$"
            color="secondary"
            type="number"
            onChange={handleChange}
            id="buyPrice"
            name="buyPrice"
            inputProps={{
              min: 0,
            }}
          />

          <Button className="StyledSpace" type="submit" variant="contained" color="primary">
            Comprar
          </Button>
          <div className='containerCredit'>
            <div className='titleContainerCredit'>
              <span className='titleCredit'>Saldo em conta (Crédito)</span>
            </div>
            <div>
              <div className='creditUser'>US$ {list.balanceUser}</div>
            </div>
          </div>
        </form>
      </BoxDetails>
    </Container>
  )
}

export default Purchase