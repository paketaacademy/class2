import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'

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
    justify-content: center;
  `
  }`

export const BoxCard = styled(Paper)`
  padding: 0.625rem;
  margin: 0.625rem;
`
