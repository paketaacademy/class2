import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { InputBase } from '@material-ui/core'

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