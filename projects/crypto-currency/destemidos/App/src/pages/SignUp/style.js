import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

export const PaperDiv = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.spacing(8)}px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`
export const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
    margin: ${theme.spacing(1)}px;
    background-color: ${theme.palette.secondary.main};
  `}
`
export const Form = styled.form`
  ${({ theme }) => `
    width: 100%;
    margin-top: ${theme.spacing(3)}px;
  `}
`
export const SubmitButton = styled(Button)`
  ${({ theme }) => `
    margin: ${theme.spacing(3, 0, 2)};
  `}
`