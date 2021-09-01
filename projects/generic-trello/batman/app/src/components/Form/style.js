import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export const FormContainer = styled.form` 
  background-color: rgb(238 221 130);
  width: 250px;
  height: 330px;
  text-align: center;
  padding: 10px;
`

export const Title = styled.p`
  font-size: 20px;
`

export const Text = styled(TextField)`
  width: 200px;
`
