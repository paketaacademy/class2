import React from 'react';
import { ContainerDiv, ButtonDiv, StyledButton } from './Style.js'
import { Link } from 'react-router-dom'
import './Style.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'

function CoinsDetails() {
  return (
    <ContainerDiv>
      <h4>Coins</h4>
      <div>0,09 BTC</div>      
      <ButtonDiv>
        <Link className="LinkButton" to='/mercado'>
          <StyledButton variant="contained" color="primary">
          Comprar<AddShoppingCartIcon/>
        </StyledButton></Link>
        <StyledButton variant="contained" color="secondary">
          Vender<CompareArrowsIcon/>
        </StyledButton>
      </ButtonDiv>    
    </ContainerDiv>
  )
}

export default CoinsDetails
