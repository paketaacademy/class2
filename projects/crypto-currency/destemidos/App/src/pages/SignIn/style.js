import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'


export const PaperDiv = styled.div`
${({ theme }) => `
  margin-top: ${theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;   
`}`

export const StyledAvatar = styled(Avatar)`
${({ theme }) => `
  margin: ${theme.spacing(1)}px;
  background-color: ${theme.palette.secondary.main};
`}`

export const Form = styled.form`
${({ theme }) => `
  width: 100%;
  margin-top: ${theme.spacing(1)}px;
`}`

export const SubmitButton = styled(Button)`
${({ theme }) => `
  margin: ${theme.spacing(3, 0, 2)}px;
  margin-buttom: 10px;
`}`

export const DivContainer = styled.div`
${({ theme }) => `
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`}`