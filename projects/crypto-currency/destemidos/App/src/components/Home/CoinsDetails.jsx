import React from 'react'
import { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import { Link } from 'react-router-dom'
import { getToken } from '../../Services/auth.js'

import './Style.css'

export default function CustomizedTables() {

  const [list, setList] = useState({})
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetch(
      `${API}/profile`,
      {
        method: 'get',
        headers: new Headers({
          'auth-token': getToken(),
        })
      },
    )
      .then(async response => {
        const data = await response.json()
        setList(data)
      })
      .catch(error => console.log(error))
  }, [API, setList])

  const listView = () => {
    return (
      list.cryptoUser.map((row) => {
        console.log('entrei')
        return (
          <tr className='StyledViewBody' key={row.name}>
            <td>

              {row.name}
            </td>
            <td>{row.quant}</td>
            <td align='center'>
              <Link to={`/vender/${row.id}`}>
                <button className='StyledButtonVender'>
                  <div>Vender</div><div><CompareArrowsIcon /></div>
                </button>
              </Link>
            </td>
          </tr>
        )
      })
    )
  }

  const listTHView = () => {
    return (
      <tr className='StyledCellRow'>
        <td className='StyledCellRow'>Nome da Criptomoeda</td>
        <td className='StyledCellRow' align="right">Saldo</td>
        <td className='StyledCellRow' align="right">Vender</td>
      </tr>
    )
  }

  if (!list.cryptoUser != '') {
    return (
      <Table className='StyledView'>
        {listTHView()}
        <TableBody>
          <div className='StyledMSGSaldo'>Não possui critomoedas</div>
        </TableBody>
      </Table>
    )
  } else {
    return (
      <div className='boxView'>
        <Table className='StyledView'>
          {listTHView()}
          <TableBody>
            {listView()}
          </TableBody>
        </Table>
      </div>
    )
  }
}