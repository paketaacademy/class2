import React from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox'
import {
  Balance,
  Content,
  TableBodyStyled,
  TableCellStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
  User
} from './styles'

export const Wallet = () => {
  return (
    <>
      <User><strong>Alisson Honostorio</strong></User>
      <Balance>
        <div className="balance__div">
          <h3 className="balance__h3">
            Saldo R$:<strong> 3.000,00</strong>
          </h3>
          <AddBoxIcon className="balance-add__icon" />
        </div>
      </Balance>
      <Content>
        <div className="saved-coins__container">
          <h3 className="saved-coins__h3">Carteira</h3>
          <div className="saved-coins">
            <TableStyled>
              <TableHeadStyled>
                <TableRowStyled>
                  <TableCellStyled className="table-cell-styled__header table-cell">Coin</TableCellStyled>
                  <TableCellStyled className="table-cell-styled__header table-cell">Nome</TableCellStyled>
                  <TableCellStyled className="table-cell-styled__header table-cell">Quantidade</TableCellStyled>
                  <TableCellStyled className="table-cell-styled__header table-cell">Valor Atual</TableCellStyled>
                  <TableCellStyled className="table-cell-styled__header table-cell">Total</TableCellStyled>
                </TableRowStyled>
              </TableHeadStyled>
              <TableBodyStyled>
                <TableRowStyled>
                  <TableCellStyled></TableCellStyled>
                </TableRowStyled>
              </TableBodyStyled>
            </TableStyled>
          </div>
        </div>
        <div className="purchase-coins__container">

        </div>
      </Content>
    </>
  )
}