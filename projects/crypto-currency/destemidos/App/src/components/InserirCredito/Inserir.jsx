import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Container, Imagem, BoxPage, StyledButton, LinhaInserir, Insert } from './Style.js'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

function Inserir() {
  return (
    <BoxPage>
      <Container><img width='200' src='https://image.flaticon.com/icons/png/512/1248/1248430.png'/></Container>
      <form noValidate autoComplete="off">
        <Container>
          <TextField            
            label="Número do Cartão"
            color="secondary"
            disabled='true'
          />
          <TextField            
            label="Nome do Titular"
            color="secondary"
            disabled='true'
          />
          <LinhaInserir>
          <Insert            
            label="Validade"
            color="secondary"
            disabled='true'
          />
          <Insert            
            label="CVV"
            color="secondary"
            disabled='true'
          />
          </LinhaInserir>    
            <TextField             
              label="Valor da compra"
              color="secondary"
              type="number"
              required 
              min="0.00"               
              step=".10"              
            />           
          <StyledButton variant="contained" color="primary">
          Realizar pagamento{' '}<MonetizationOnIcon/>
        </StyledButton>
        </Container>        
      </form>
    </BoxPage>
  )
}

export default Inserir