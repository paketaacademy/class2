import styled from "styled-components"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'

export const User = styled.h2`
  font-family: var(--primary-font-family);
  font-size: 1.5rem;
  color: var(--white);
  font-weight: normal;
  margin-top: 24px;
`

export const Balance = styled.div`
  color: var(--white);
  .balance__div{
    display: flex;
    flex-direction: row;
    .balance-add__icon{
      color: var(--white);
      cursor: pointer;
      transition: all 0.3s;
    }
    .balance-add__icon:hover{
      color: var(--yellow)
    }
  }
  .balance__h3{
    font-family: var(--secondary-font-family);
    font-size: 1rem;
    margin-right: 10px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 1;
  font-family: var(--primary-font-family);
  .saved-coins__container{
    
    .saved-coins__h3{
      font-size: 1.5rem;
      font-family: var(--secondary-font-family);
      font-weight: bold;
      letter-spacing: 1px;
      color: var(--white);
      margin: 32px 0 16px 0;
    }
    .saved-coins{
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      height: 50vh;
      background-color: var(--white);
    }
    display: flex;
    flex-direction: column;
    max-width: 48%;
    width: 100%;
  }
  .purchase-coins__container{
    display: flex;
    flex-direction: column;
    max-width: 48%;
    width: 100%;
  }
`

export const TableStyled = styled(Table)`
  .table-cell:last-of-type{
    text-align: right;
  }
`

export const TableHeadStyled = styled(TableHead)`
  background-color: var(--yellow);
  font-family: var(--secondary-font-family);
  font-size: 1.1rem;
  .table-cell-styled__header{
    color: var(--white);

  }
`

export const TableRowStyled = styled(TableRow)`

`

export const TableBodyStyled = styled(TableBody)`

`

export const TableCellStyled = styled(TableCell)`

`