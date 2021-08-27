import styled from 'styled-components'
import { Paper, Button } from '@material-ui/core'

export const BoxCard = styled(Paper)`
  width: 280px;
  margin: 10px;
  padding-bottom: 10px;
`

export const Confirm = styled(Button)`
  background: #5AAC44;
  color: #fff;
  &:hover: {
    background: #5AAC44;
  }
`

export const BoxConfirm = styled.div`
  margin: 10px;
`

export const Container = styled.div`
  width: 300px;
  margin-top: 10px;
`

export const ContainerAdd = styled(Paper)`
  padding: 5px 5px 5px 15px;
  margin: 10px;
  background: #e5e5e5;
  &:hover: {
    background-color: #000;
  }
`