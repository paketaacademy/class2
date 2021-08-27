import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'

export const ModalBox = styled(Modal)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
  `
  }`

export const PaperBox = styled.div`
  ${({ theme }) => `    
    background-color: #fff;
    border: 0.125rem solid #000;
    box-shadow: 0.625rem 0.313rem 0.313rem #a8a1a1;   
    display: flex;
    flex-direction: column;
    padding: 0.938rem;
  `
  }`
export const BoxDetails = styled.div`
  ${({ theme }) => `    
    margin: 0.625rem;
    display: flex;
    justify-content: space-around;
  `
  }`

export const BoxCard = styled(Paper)`
  display: flex;
  justify-content: space-between;
  padding: 0.938rem;
  margin: 0.625rem;
  align-items: center;
`
export const StyledContentMore = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  padding: 10px;
`
export const TextDexcription = styled(TextField)`
  width: 29.5ch;
`