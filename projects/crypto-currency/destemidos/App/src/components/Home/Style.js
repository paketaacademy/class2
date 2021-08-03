import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import Button from '@material-ui/core/Button'

export const ContainerDiv = styled.div`
  ${({ theme }) => `
    text-align: center;
    max-width: 300px;
    min-height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #7c7c7c;
    padding: 20px;
    border-radius: 10px;
    margin: 10px;
  `}
`

export const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `    
    align-self: center;
    margin-bottom: 10px;
  `
}`

export const ButtonDiv = styled.div`
  ${({ theme }) => `
    max-width: 300px;
    align-self: center;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `
}`

export const StyledButton = styled(Button)`
  ${({ theme }) => `
    width: 140px;
    margin: 10px
  `
}`

