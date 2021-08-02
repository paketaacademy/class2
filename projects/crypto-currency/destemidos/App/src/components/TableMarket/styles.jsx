import TableCellUi from '@material-ui/core/TableCell';
import TablePaginationUi from '@material-ui/core/TablePagination';
import styled from "styled-components";


const TableCell = styled(TableCellUi)`
    color: ${props => props.txtColor ? props.txtColor : '#fff'};
    position: ${props => props.sticky ? 'sticky' : 'static'};
    z-index: 2;   
    box-shadow:  rgb(81 81 81) 1px 1px;
    border-bottom: rgb(81 81 81) 1px solid;
    left: 0px;
    height: 60px;
    padding: 4px 10px;
    max-width: 194px;
    margin-top: 1px;
    transition: left 200ms;
    margin-left: 60px;
    background-color: #11121b;
    &+& {
        left: 35px;
    }
`

const TablePagination = styled(TablePaginationUi)`
    color: #fff;
    background-color: #11121b;
`

const StyledP = styled.p`
    color: ${props => props.txtColor ? props.txtColor : '#fff'};
`

export { TableCell, StyledP, TablePagination }
