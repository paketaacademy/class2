import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

export const SearchBox = styled(Paper)`
  min-width: 600px;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 450px;
`

export const SearchUser = styled(InputBase)`
  margin-left: 10px;
  flex: 1;
  background: transparent;
`

export const IconBox = styled(IconButton)`
  padding: 10;
`
