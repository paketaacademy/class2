import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

//title

export const EditableTitleContainer = styled.div`
${({ theme }) =>`
      margin: ${theme.spacing(1)}px;
      display: flex;
      `}
      `

export const EditableTitle = styled.div`
${({ theme }) =>`
      flex-grow: 1;
      font-size: 1.2rem;
      font-weight: bold;
      `}
      `
export const BoxTitle = styled.div`
${({ theme }) =>`
      font-size: 1.2rem;
      font-weight: bold;
      margin: ${theme.spacing(1)}px;
      &:focus: {
      background: #ddd;
      `}
      `

  //list 

export const Papel = styled(Paper)` 
${({ theme }) =>`
      width: 300px;
      background-color: #EBECF0;
      margin-left: ${theme.spacing(1)}px;
      `}
      `

//card

export const Container= styled(Paper)` 
${({ theme }) =>`
     padding: ${theme.spacing(1)}px;
     margin: ${theme.spacing(1)}px;
     `}
     `


