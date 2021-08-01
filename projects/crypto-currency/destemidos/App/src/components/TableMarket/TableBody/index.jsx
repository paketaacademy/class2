import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { getComparator, stableSort } from '../utils'


function TBody(props) {
    const { order, orderBy, rows, rowsPerPage, page, onClickRow } = props;

    return (
        <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                        <TableRow
                            hover
                            onClick={(event) => onClickRow(event, row.name)}
                            role="checkbox"
                            tabIndex={-1}
                            key={row.name}

                        >
                            <TableCell component="th" scope="row" padding="none">
                                {index}
                            </TableCell>
                            <TableCell align="right">{row.n}:{row.s}</TableCell>
                            <TableCell align="right">+</TableCell>
                            <TableCell align="right">{row.gs}</TableCell>
                            <TableCell align="right">{row.acr}</TableCell>
                            <TableCell align="right">{row.cr}</TableCell>
                            <TableCell align="right">{row.p} || {row.p_btc}</TableCell>
                            <TableCell align="right">{row.pch}</TableCell>
                            <TableCell align="right">{row.pc}</TableCell>
                            <TableCell align="right">--</TableCell>
                            <TableCell align="right">{row.mc}</TableCell>
                            <TableCell align="right">{row.v}</TableCell>
                            <TableCell align="right">{row.d}</TableCell>
                            <TableCell align="right">{row.vt}</TableCell>
                            <TableCell align="right">--</TableCell>
                            <TableCell align="right">{row.sv}</TableCell>
                            <TableCell align="right">{row.ss}</TableCell>
                            <TableCell align="right">{row.c}</TableCell>
                            <TableCell align="right">{row.sd}</TableCell>
                            <TableCell align="right">{row.as}</TableCell>
                            <TableCell align="right">{row.bl}</TableCell>
                            <TableCell align="right">{row.br}</TableCell>
                            <TableCell align="right">{row.u}</TableCell>
                            <TableCell align="right">{row.t}</TableCell>
                            <TableCell align="right">{row.md}</TableCell>
                            <TableCell align="right">{row.r}</TableCell>
                            <TableCell align="right">{row.yt}</TableCell>
                            <TableCell align="right">{row.na}</TableCell>
                            <TableCell align="right">{row.sp}</TableCell>
                        </TableRow>
                    );
                })}

        </TableBody>
    );
}

TBody.propTypes = {
    onClickRow: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rows: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
};

export default TBody;

