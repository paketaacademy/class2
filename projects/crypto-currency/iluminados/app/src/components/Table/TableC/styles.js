import styled from 'styled-components'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';


export const Border=styled.div`
margin-top:200px;
border`

export const Table_= styled(Table)`
border-color:black;
max-width: 60%;
`

export const TableHead_= styled(TableHead)`

`

export const TableRowOne= styled(TableRow)`
`

export const TableRowTwo= styled(TableRow)`
`

export const TableCellOne= styled(TableCell)`
color :black;
text-align: center;
white-space: nowrap;
transition: 0.5s;
  
  &:hover {
    color: red;
    background: gray;
  }


`
export const TableCellTwo= styled(TableCell)`
color :black;
text-align: center;
white-space: nowrap;
  
  &:hover {
    color: gray;
    
  }

`
export const TableCellThree= styled(TableCell)`
color :black;
text-align: center;
white-space: nowrap;
  
  &:hover {
    background: gray;
    
  }

`


export const TableContainerM= styled(TableContainer)`

`
export const TableCellThreeP= styled(TableCell)`
color: ${props => props.primary ? 'green' : 'red'}
`

