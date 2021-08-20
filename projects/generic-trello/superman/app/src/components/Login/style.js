import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

export const Container = styled.div`
${({ theme }) =>`
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center:
  align-self: center:
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  `}
  `

export const Image = styled.div`
    ${({ theme }) =>`
    background-image: url(https://cdn.pixabay.com/photo/2019/06/27/19/34/boy-4302994_960_720.jpg);
    background-repeat: no-repeat;
    background-color: ${theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900]};
    background-size: cover;
    background-position: center;
    width:60%;
    `}
    `

export const BoxPapper = styled.div`
  ${({ theme }) =>`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    `}
    `
    
export const AvatarLogin = styled(Avatar)`
  ${({ theme }) =>`
    margin: ${theme.spacing(1)}px;
    background-color: ${theme.palette.secondary.main};
    `}
    `

export const Form = styled.form`
  ${({ theme }) =>`
    width: 50%;
    margin-top: ${theme.spacing(1)};
    `}
    `

export const Submit = styled(Button)`
  ${({ theme }) =>`
   margin: 10px 0;
   `}
   `