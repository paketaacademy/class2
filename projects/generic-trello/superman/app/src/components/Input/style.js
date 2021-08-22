import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

//InputCard

export const Card = styled(Paper)`   
${({ theme }) => `     
        padding-bottom: ${theme.spacing(4)}px;
        margin: ${theme.spacing(0, 1, 1, 1)}px;
        padding: ${theme.spacing(1, 1, 1, 0)}px;
    `}
    `

export const input = styled.div` 
${({ theme }) => `
        margin: ${theme.spacing(1)}px;
    `}
    `

export const BtnConfirm = styled(Button)`
${({ theme }) => `
    background: #5AAC44;
    color: #fff;
    &:houver:{
      background: #5AAC44;
        };
    `}
    `

export const Confirm = styled.div`
${({ theme }) => `
        margin: ${theme.spacing(0, 1, 1, 1)}px;
    `}
    `

//inputContainer

export const Root = styled.div` 
${({ theme }) => `
        margin-top: ${theme.spacing(2)}px;
    `}
    `

export const AddCard = styled(Paper)` 
${({ theme }) => `
        padding: ${theme.spacing(1, 1, 1, 2)}px;
        margin: ${theme.spacing(0, 1, 1, 1)}px;
        background-color: #EBECF0;
        &:houver: {
            background-color: #000;
        };
    `}
    `