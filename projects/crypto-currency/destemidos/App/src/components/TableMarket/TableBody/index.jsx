import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import { getComparator, stableSort, getColorOfNumber } from '../utils'
import { TableCell, StyledP } from '../styles.js'




function TBody(props) {
    const { order, orderBy, rows, rowsPerPage, page, onClickRow } = props;

    return (
        <TableBody on>
            {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                    return (
                        <TableRow
                            hover
                            onClick={(event) => onClickRow(event, row.name)}
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                        >
                            <TableCell sticky component="th" scope="row" padding="none">
                                {index}
                            </TableCell>
                            <TableCell sticky borderRight align="right"><div className="t">{row.n}:{row.s}</div></TableCell>
                            <TableCell align="right">+</TableCell>
                            <TableCell align="right">{row.gs}</TableCell>
                            <TableCell align="right">{row.acr}</TableCell>
                            <TableCell align="right">{row.cr}</TableCell>
                            <TableCell align="right">
                                <p>{row.p}</p>
                                <StyledP txtColor={getColorOfNumber(row.p_btc)}>
                                    {row.p_btc.toFixed(9)}
                                </StyledP>
                            </TableCell>
                            <TableCell align="right" txtColor={getColorOfNumber(row.pch)}>{row.pch}</TableCell>
                            <TableCell align="right" txtColor={getColorOfNumber(row.pc)}>{row.pc}</TableCell>
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

