import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { InputBase } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

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
  

export const ContainerList = styled.div`
  max-width: 300px;
  background: #cfe1fc;  
  margin: 0.625rem;
  border-radius: 0.188rem;
`

export const ContainerCard = styled(Paper)`
  padding:0.625rem;
  margin:0.625rem;
  background: #fff;
  border: none;
`

export const editableTitleContainer = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  font-weight: bold;
  padding: 10px;
  justify-content: space-between;
`

export const editableTitle = styled(Typography)`
  flex-grow: 1;
  margin: 10px;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`

export const styledIn = styled(InputBase)`
  margin: 0.625rem;
`

export const ButtonEdit = styled(Button)`
  ${({ theme }) => `
    width: 10px;
    margin-left: 10px;
  `
  }`