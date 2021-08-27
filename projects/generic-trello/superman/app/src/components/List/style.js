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
  justify-content: space-around;
  `
  }`

export const ContainerList = styled.div`
  max-width: 18.75rem;
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
  margin: 0.625rem;
  padding: 0.625rem;
  display: flex;
  font-weight: bold;
  padding: 10px;
  justify-content: space-between;
`

export const editableTitle = styled(Typography)`
  flex-grow: 1;
  margin: 0.625rem;
  padding: 0.625rem;
  font-size: 1.2rem;
  font-weight: bold;
`

export const styledIn = styled(InputBase)`
  margin: 0.625rem;
`

export const ButtonEdit = styled(Button)`
  ${({ theme }) => `
    width: 0.625rem;
    margin-left: 0.625rem;
  `
  }`

export const TitleStyled = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    padding: 0.313rem;
    margin: 0 0.625rem;
    font-size: 1rem;
    font-weight: bold;
    align-items: center;
    align-self: center;
  `
  }`

export const OptionMore = styled.div`
  ${({ theme }) => `
    font-size: 1.25rem;
  `
  }`