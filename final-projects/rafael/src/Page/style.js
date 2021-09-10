import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

export const PageContainer = styled.div`  
  width: 37.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;   
  flex-direction: column;
  align-items: center; 
  font-size: 0.875rem;
  @media (max-width: 37.5rem) {
    width: 25rem;
  }
  @media (max-width: 25rem) {
    width: 18.75rem;
  }  
`

export const Box = styled.div`   
  width: 37.5rem;
  display: flex;   
  flex-direction: row;  
  align-items: flex-start;  
  border: 0.063rem solid #d6d6d6;  
  border-radius: 0.625rem;
  padding: 0.938rem;
  @media (max-width: 600px) {
    width: 25rem;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 25rem) {
    width: 18.75rem;
  }
`

export const SearchBox = styled(Paper)`
  width: 37.5rem;
  padding: 0.125rem 0.25rem;
  display: flex;
  align-items: center;  
  margin-bottom: 0.938rem;
  @media (max-width: 37.5rem) {
    width: 25rem;
  }
  @media (max-width: 25rem) {
    width: 18.75rem;
    font-size: 0.75rem;
  }
`

export const MessageApi = styled.div`
  max-width: 37.5rem;
  padding: 0.125rem 0.25rem;
  display: flex;
  align-items: center;
  margin-top: 0.938rem;
  color: tomato;
  @media (max-width: 37.5rem) {
    max-width: 25rem;
  }
  @media (max-width: 25rem) {
    max-width: 18.75rem;
  }
`

export const MessageNull = styled.div`
  color: red;
  font-size: 0.875rem;
`

export const SearchUser = styled(InputBase)`
  margin-left: 0.625rem;
  flex: 1;
  background: transparent;
`

export const IconBox = styled(IconButton)`
  padding: 0.625rem;
`