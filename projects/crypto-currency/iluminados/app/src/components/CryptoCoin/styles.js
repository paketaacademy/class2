import styled from "styled-components"
import { Paper, TextField } from "@material-ui/core"

export const CoinName = styled.h2`
  font-family: var(--primary-font-family);
  font-size: 1.5rem;
  color: var(--white);
  font-weight: normal;
  margin: 24px 0;
`

export const PaperStyled = styled(Paper)`
  max-width: 700px;
  justify-content: center;
  padding: 16px 0 16px 24px;
  font-size: 1.2rem;
  font-family: var(--primary-font-family);
  .coin-price__p{
    margin: 16px 0 0 0;
  }
  .amount-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 16px 0;
  }
  .button-container{
    margin-top: 32px;
  }
`

export const AmountField = styled(TextField)`
  max-width: 70px;
  margin-left: 10px;
  .MuiInput-input{
    font-family: var(--primary-font-family);
  font-size: 1.2rem;
  }
`