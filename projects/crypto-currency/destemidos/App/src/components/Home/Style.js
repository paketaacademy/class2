import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const ContainerStyled = styled.div`
  ${({ theme }) => `
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    align-self: center;
    flex-direction: row;
    border: 1px solid #522e74;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
  `}
`
export const BoxStyled = styled.div`
  ${({ theme }) => `
    max-width: 300px;
    align-self: center;
    margin: 10px;
    justify-content: space-between;
  `
}`

export const StyledButtonComprar = styled(Button)`
  ${({ theme }) => `
    width: 140px;  
    z-index: 0;
  `
}`

export const StyledTitle = styled.th`
  ${({ theme }) => `
  background-color: #522e74,
  color: ${theme.palette.common.white},
  text-align: center,
  font-size: 14px,
  `
}`

export const StyledRow = styled.tbody`
  ${({ theme }) => `
  &:nth-of-type(odd): {
    backgroundColor: ${theme.palette.action.hover},
  },
  text-align: center,
  `
}`