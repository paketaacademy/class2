import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import { Link } from 'react-router-dom'
import './Style.css'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
]

export default function CustomizedTables() {
  return (
    <div className='boxView'>
      <Table className='StyledView'>
        <tr className='StyledCellRow'>
            <td className='StyledCellRow'>Nome da Criptomoeda</td>
            <td className='StyledCellRow' align="right">Saldo</td>
            <td className='StyledCellRow' align="right">Vender</td>          
        </tr>
        <TableBody>
          {rows.map((row) => (
            <tr className='StyledViewBody' key={row.name}>
              <td>
                {row.name}
              </td>
              <td>{row.calories}</td>
              <td align='center'>
                <Link to='/mercado'>
                  <button className='StyledButtonVender'>
                    <div>Vender</div><div><CompareArrowsIcon /></div>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}