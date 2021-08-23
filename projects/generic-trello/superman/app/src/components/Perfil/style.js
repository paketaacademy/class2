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
    padding: 1.875rem;    
  `
}`

export const Box = styled(Paper)`
  ${({ theme }) => `    
    width: 12.5rem;
    height: 5rem;
    margin: 0.625rem;  
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
    padding: 1.25rem;  
  `
}`

export const BoxContent = styled.div`
  ${({ theme }) => `    
    diplay: flex;
    justify-content: center;
    align-items: center;
    align-self: center;  
    padding: 0.625rem;
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
    font-size: 2.5rem;
    color: #303f9f;
  `
}`