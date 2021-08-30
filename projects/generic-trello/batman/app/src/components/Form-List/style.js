import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export const FormBox = styled.form` 
  background-color: rgb(238 221 130);
  border-radius: 10px;
  width: 250px;
  height: 350px;
  text-align: center;
  padding: 10px;
  margin-top: 110px;
  margin-left: 470px;

  @media screen and (max-width: 415px) and (min-width: 340px) { 
    margin-top: 150px;
    margin-left: 45px;
  }
`

export const Title = styled.p`
  font-size: 20px;
`

export const TextList = styled(TextField)`
  width: 200px;
`