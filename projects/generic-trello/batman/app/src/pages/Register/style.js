import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

export const PaperDiv = styled.div` 
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  padding: 20px;
  box-shadow: 5px 5px 5px 5px rgb(79 79 79);
`
export const StyledAvatar = styled(Avatar)`
  margin: 5px;
  background-color: rgb(255 215 0);
`
export const Form = styled.form`
  width: 100%;
  margin-top: 1em;
`
export const SubmitButton = styled(Button)`
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: rgb(79 79 79);

  &:hover {
    background-color: rgb(105 105 105);
  }
`