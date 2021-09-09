import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

export const PageContainer = styled.div`  
  min-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;   
  flex-direction: column;
  align-items: center;
 
`

export const Box = styled.div`   
  width: 600px;
  display: flex;   
  flex-direction: row;  
  align-items: flex-start;
  margin: 10px;
  border: 1px solid #d6d6d6;  
  border-radius: 10px;
  padding: 15px;
`

export const SearchBox = styled(Paper)`
  min-width: 600px;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 450px;
  margin-bottom: 5px;
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