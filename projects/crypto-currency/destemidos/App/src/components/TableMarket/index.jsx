import React from 'react'
import PropTypes from 'prop-types'

import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import THead from './TableHeader'
import TBody from './TableBody'
import Paper from '@material-ui/core/Paper'

import { TablePagination } from './styles.js'

function TableMarket(props) {
    const { rows, headCells } = props;
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('calories')
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    };

    const handleClick = (event, name) => { }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(1)
    }

    return (
        <div>

            <Paper>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <TableContainer>
                    <Table
                        aria-labelledby="tableTitle"
                        size='medium'
                        aria-label="enhanced table"
                    >
                        <THead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            headCells={headCells}
                        />
                        <TBody
                            onClickRow={handleClick}
                            order={order}
                            orderBy={orderBy}
                            page={page}
                            rows={rows}
                            rowsPerPage={rowsPerPage}
                        />
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

TableMarket.propTypes = {
    rows: PropTypes.array.isRequired,
    headCells: PropTypes.array.isRequired
}


export default TableMarket