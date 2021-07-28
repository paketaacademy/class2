import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const Btn = styled(Button)`
  &&{
    color: #FFF0FB;
    letter-spacing: 1px;
    background-color: ${({ color }) => color || '#ffff'};
  }
`