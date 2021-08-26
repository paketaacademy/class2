import React, { useState, useContext } from 'react'
import { InputBase, IconButton } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import { BoxCard, Confirm, BoxConfirm } from './style.js'
import storeApi from '../../utils/storeApi'

export default function InputCard({ setOpen, listId, type }) {

  const { addMoreCard, addMoreList } = useContext(storeApi)
  const [title, setTitle] = useState('')

  const handleOnChange = (e) => {
    setTitle(e.target.value)
  }

  const handleBtnConfirm = () => {
    if (type === 'card') {
      addMoreCard(title, listId)
      setTitle('')
      setOpen(false)
    } else {
      addMoreList(title)
      setTitle('')
      setOpen(false)
    }
  }

  return (
    <div>
      <div>
        <BoxCard>
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            value={title}
            placeholder={
              type === 'card'
                ? 'Insira um título para este cartão..'
                : 'Insira o título da lista...'
            }
          />
        </BoxCard>
      </div>
      <BoxConfirm >
        <Confirm onClick={handleBtnConfirm}>
          {type === 'card' ? 'Adicionar Cartão' : 'Adicionar Lista'}
        </Confirm>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </BoxConfirm>
    </div>
  )
}