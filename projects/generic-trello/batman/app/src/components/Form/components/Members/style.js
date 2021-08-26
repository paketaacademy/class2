import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'

export const Control = styled(FormControl)`
${({ theme }) => `
  margin: ${theme.spacing(1)}px;
  width: 200px;
`}`