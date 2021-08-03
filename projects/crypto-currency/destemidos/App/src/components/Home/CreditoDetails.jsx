import React from 'react'
import { ContainerDiv, ButtonDiv, StyledButton } from './Style.js'
import { Link } from 'react-router-dom'
import './Style.css'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

function CreditoDetails() {
  return (
    <ContainerDiv>
      <h4>Crédito em conta</h4>
      <div>R$ 3.000,00</div>
      <ButtonDiv>
        <Link className="LinkButton" to='/InserirCredito'>
          <StyledButton variant="contained" color="primary">
            Depositar<MonetizationOnIcon/>
          </StyledButton> 
        </Link>       
      </ButtonDiv>    
    </ContainerDiv>
  )
}

export default CreditoDetails
