import styled from 'styled-components' 
import Button from '@material-ui/core/Button' 
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

export const SubmitButton = styled(Button)`
  ${({ theme }) => `
  margin: ${theme.spacing(1)}px; 
  font-family: cursive;
  margin-left: 60px;
  width: 30px;
  pointer-events: visiblefill;
  background: #ffd600;
  margin-left: auto;
 
`}`

export const Container = styled.div`
  height: 50px;
  padding: 30px;
  background: rgb(218 165 32);
  color: rgb(54 54 54);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 415px) and (min-width: 320px) {
    font-size: 14px;
    margin-bottom: 60px;

  }

  @media screen and (max-width: 339px) and (min-width: 228px) {
    margin-bottom: 20px;
  }

`

export const Exit = styled(ExitToAppIcon)`
  width: 35px;
  height: 35px;
  cursor: pointer;
    
    &:hover{
    color: rgb(238 221 130);
  }

`

export const Image = styled.img`
  height: 60px;  
  
` 

export const Title = styled.h1`
  font-family: cursive;
  margin-left: 20px;
  width: auto;
  margin-right: auto;
  font-size: 20px;
`