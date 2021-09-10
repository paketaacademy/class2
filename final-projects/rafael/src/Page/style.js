import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

export const PageContainer = styled.div`  
  width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;   
  flex-direction: column;
  align-items: center; 
  font-size: 14px;
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
  
`

export const Box = styled.div`   
  width: 600px;
  display: flex;   
  flex-direction: row;  
  align-items: flex-start;  
  border: 1px solid #d6d6d6;  
  border-radius: 10px;
  padding: 15px;
  @media (max-width: 600px) {
    width: 400px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`

export const SearchBox = styled(Paper)`
  width: 600px;
  padding: 2px 4px;
  display: flex;
  align-items: center;  
  margin-bottom: 15px;
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;
    font-size: 12px;
  }
`

export const MessageApi = styled.div`
  max-width: 600px;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: tomato;
  @media (max-width: 600px) {
    max-width: 400px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
  }
`

export const MessageNull = styled.div`
  color: red;
  font-size: 14px;
`

export const SearchUser = styled(InputBase)`
  margin-left: 10px;
  flex: 1;
  background: transparent;
`

export const IconBox = styled(IconButton)`
  padding: 10;
`