import React from 'react'
import { ContainerStyled, BoxStyled, StyledButtonComprar } from './Style.js'
import { Link } from 'react-router-dom'
import './Style.css'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

function CreditDetails() {
  return (
    <div className='boxContainer'>
      <span className='titleCredit'>Saldo em conta</span>
      <div className='StyledCredit'>
        <div className='rowCredit'>
          <div className='creditUser'>US$ 3.000,00</div>
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