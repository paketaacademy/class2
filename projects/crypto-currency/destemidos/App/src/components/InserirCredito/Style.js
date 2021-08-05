import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


export const BoxPage = styled.div`
  ${({ theme }) => `
    max-width: 900px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    border: 1px solid #522e74;
    border-radius: 10px;
    margin: 0 auto;   
    padding: 10px; 
  `}
`

export const Container = styled.div`
  ${({ theme }) => `    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

  `}
`

export const ContainerRow = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
  `}
`

export const StyledButton = styled(Button)`
  ${({ theme }) => `
    width: 160px;
    margin: 20px;
  `
}`

export const LinhaInserir = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    width: 100%;

  `
}`

export const Insert = styled(TextField)`
  ${({ theme }) => `
    max-width: 80px;
    
  `
}`