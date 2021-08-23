import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const Container = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    width: 100%;
    height: 100vh;
    padding: 30px;
    & > *: {
      margin: ${theme.spacing(1)}px;
      width: ${theme.spacing(16)}px;
      height: ${theme.spacing(16)}px,
    },
  `
}`

export const Box = styled(Paper)`
  ${({ theme }) => `    
    width: 200px;
    height: 80px;
    margin: 10px;  
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
    padding: 20px;  
  `
}`

export const BoxContent = styled.div`
  ${({ theme }) => `    
    diplay: flex;
    justify-content: center;
    align-items: center;
    align-self: center;  
    padding: 10px;
  `
}`

export const Redirect = styled(Link)`
  ${({ theme }) => `    
    text-decoration: none;
    color: #000;
  `
}`

export const Icon = styled(AddCircleIcon)`
  ${({ theme }) => `    
    font-size: 40px;
  `
}`