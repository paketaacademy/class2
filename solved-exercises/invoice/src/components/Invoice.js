import React, { Fragment } from 'react'
import { INVOICES } from './constants'

export const contador = 5

export const Invoice = (props) => {
  console.log('props,', props)
  const { fn1, fn2 } = props

  const values = Object.keys(INVOICES)

  const renderInvoices = (item, index) => {
    return (
      <div key={index}>
        {`${index} Item: ${item}: ${INVOICES['Three Unicorns']}`}
        <hr />
      </div>
    )
  }

  return (
    <div>
      {values.map(renderInvoices)}
    </div>
  )
}

export default Invoice
