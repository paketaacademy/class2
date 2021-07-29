import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const Btn = styled(Button)`
  &&{
    color: ${({ color }) => color || '#FFF0FB'};
    letter-spacing: 1px;
    background-color: ${({ color }) => color || '#FFF0FB'};
    font-family: var(--primary-font-family);
  }
`