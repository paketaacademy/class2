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
  @media (max-width: 37.5rem) {
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
    margin: 3.125rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    `}
    `
    
export const AvatarLogin = styled(Avatar)`
  ${({ theme }) =>`
    margin: 0.625rem;
    background-color: #f50057;
    `}
    `

export const Form = styled.form`
  ${({ theme }) =>`
    width: 50%;    
    `}
    `

export const Submit = styled(Button)`
  ${({ theme }) =>`
   margin: 0.625rem 0;
   `}
   `