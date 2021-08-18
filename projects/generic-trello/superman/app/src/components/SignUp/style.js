import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

export const BoxPapper = styled.div`
  ${({ theme }) => `
    margin: ${theme.spacing(8)}px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
  `

export const AvatarLogin = styled(Avatar)`
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

export const Submit = styled(Button)`
  ${({ theme }) => `
    margin: ${theme.spacing(3, 0, 2)}px;
    margin-top: 15px;
  `}
  `