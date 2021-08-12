import React from 'react'
import { useState, useEffect } from 'react'
import { StyledButtonComprar } from './Style.js'
import { Link } from 'react-router-dom'
import './Style.css'
import { getToken } from '../../Services/auth.js'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

function CreditDetails() {
  const [list, setList] = useState({})
  const API = process.env.REACT_APP_API_URL

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
        console.log('data', data)
        setList(data)

      })
      .catch(error => console.log(error))
  }, [API, setList]);

  return (
    <div className='boxContainer'>
      <span className='titleCredit'>Saldo em conta</span>
      <div className='StyledCredit'>
        <div className='rowCredit'>
          <div className='creditUser'>US$ {list.balanceUser}</div>
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