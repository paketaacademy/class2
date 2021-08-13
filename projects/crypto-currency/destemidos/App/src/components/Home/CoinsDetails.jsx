import React from 'react'
import { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import { Link } from 'react-router-dom'
import { getToken } from '../../Services/auth.js'
import Skeleton from '@material-ui/lab/Skeleton'
import './Style.css'

export default function CustomizedTables() {

  const [list, setList] = useState({})
  const API = process.env.REACT_APP_API_URL
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
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
        setList(data.cryptocurrencies)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [API, setList])

  const renderSkeleton = () => {
    return (
      new Array(5).fill().map((row, i) => {
        return (
          <tr className='StyledViewBody' key={i}>
            <td align='center' ><Skeleton width={140} height={30} /></td>
            <td align='center'><Skeleton width={180} height={30} /></td>
            <td align='center'><Skeleton width={120} height={50} /></td>
          </tr>
        )
      })
    )
  }

  const listView = () => {
    if (list == '') {
      return (
        <TableBody>
          <div className='StyledMSGSaldo'>Não possui critomoedas</div>
        </TableBody>
      )
    } else {
      return (
        list.length > 0 && list.map((row) => {
          return (
            <tr className='StyledViewBody' key={row.id}>
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
  }

  const listTHView = () => {
    return (
      <tr className='StyledCellRow'>
        <td className='StyledCellRow'>Nome da Criptomoeda</td>
        <td className='StyledCellRow' align="right">Quantidade</td>
        <td className='StyledCellRow' align="right">Vender</td>
      </tr>
    )
  }

  return (
    <div className='boxView'>
      <Table className='StyledView'>
        {listTHView()}
        <TableBody>
          {loading ? renderSkeleton() : listView()}
        </TableBody>
      </Table>
    </div >
  )

}