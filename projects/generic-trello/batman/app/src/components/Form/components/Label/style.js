import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

export const Control = styled(FormControl)`
${({ theme }) => `
  margin: ${theme.spacing(1)}px;
  width: 200px;
`}`

export const MenuItemOne = styled(MenuItem)`
  background-color: none;
`

export const MenuItemTwo = styled(MenuItem)`
  background-color: red;
`

export const MenuItemThree = styled(MenuItem)`
  background-color: blue;
`

export const MenuItemFour = styled(MenuItem)`
  background-color: green;
`