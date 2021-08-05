import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

export const ContainerRoot = styled.div`
  ${({ theme }) => `
    flexGrow: 1,
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 10px;
    align-items: center;
  `}
`

export const PaperBox = styled.div`
  ${({ theme }) => `
    max-width: 600px;
    cursor: 'pointer';
    margin:10px;
    border-radius: 10px;
    align-items:center;
    color: #000;
    cursor: pointer;
    box-shadow: 3px 3px 3px #9E9E9E;
    margin: ${theme.spacing(1)}px auto;
    padding: ${theme.spacing(2)}px;
  `}
`

export const TypographyStyled = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    text-align: center;  
    padding: 0 20px  
  `}
`

export const CardStyled= styled.div`
  ${({ theme }) => `
    max-width: 345px;
    cursor: 'pointer';
    
    margin:10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #9E9E9E;
  `
}`

export const CardMediaStyled = styled.div`
  ${({ theme }) => `
    
    padding-top: 56.25%;
    background-image: url('https://placedog.net/640/480?random');
    background-position:center;
    background-size: cover;

  `
}`

export const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
    backgroud: red;
  `
}`

export const Container = styled.div `
  ${({ theme }) => `
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto; 
  `
}`