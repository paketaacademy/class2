import React from 'react'
import { useState, useEffect } from 'react'
import { StyledButtonComprar } from './Style.js'
import { Link } from 'react-router-dom'
import './Style.css'
import { getToken } from '../../Services/auth.js'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import Skeleton from '@material-ui/lab/Skeleton'

function CreditDetails() {
  const [list, setList] = useState(0)
  const API = process.env.REACT_APP_API_URL
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
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
        console.log('data', data)
        setList(data.balance)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [API, setList])

  return (
    <div className='boxContainer'>
      <span className='titleCredit'>Saldo em conta</span>
      <div className='StyledCredit'>
        <div className='rowCredit'>
          <div className='creditUser'> {loading ? <Skeleton variant='text' width={100} height={25} /> : `US$ ${list}`}</div>
        </div>
        <div className='rowCredit'>
          <Link className="LinkButton" to='/credito'>
            <StyledButtonComprar variant="contained" color="primary">
              Depositar<MonetizationOnIcon />
            </StyledButtonComprar>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreditDetails