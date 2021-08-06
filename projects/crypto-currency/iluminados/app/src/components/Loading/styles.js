import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

export const LoadContainer = styled.div`
  display: grid;
  height: 80vh;
  width: 90vw;
  place-items: center;
`

export const Load = styled(CircularProgress)`
  color: 'primary';
  display: flex;
  flex-direction: row;
  justify-content: center;
`