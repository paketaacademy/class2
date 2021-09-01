import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export const FormBox = styled.form` 
  background-color: rgb(238 221 130);
  border-radius: 10px;
  width: 250px;
  height: 230px;
  text-align: center;
  padding: 10px;
  margin-top: 130px;
  margin-left: 470px;

  @media screen and (max-width: 415px) and (min-width: 340px) { 
    margin-top: 150px;
    margin-left: 45px;
  }
`

export const Title = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
  word-break: break-word;
`

export const TextList = styled(TextField)`
  width: 200px;
`