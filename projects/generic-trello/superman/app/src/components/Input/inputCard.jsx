import React, { useState, useContext } from 'react'
import { InputBase, IconButton } from '@material-ui/core'
import axios from 'axios'
import { getToken } from '../../Services/auth'
import ClearIcon from '@material-ui/icons/Clear'
import { BoxCard, Confirm, BoxConfirm } from './style.js'
import storeApi from '../../utils/storeApi'

export default function InputCard({ setOpen, id, type }) {

  const API = process.env.REACT_APP_API_URL
  const { addMoreCard, addMoreList } = useContext(storeApi)
  const [title, setTitle] = useState('')

  const handleOnChange = (e) => {
    setTitle(e.target.value)
  }

  const addList = () => {
    axios.post(`${API}/list`, { idBoard: id, title: title },
      {
        headers: {
          'auth-superman': getToken(),
        }
      }
    )
      .then(response => {
        window.location.reload()
      }).catch(err => {
        console.log(err.response.data.message)
      })
  }

  const addCard = () => {
    axios.post(`${API}/card`, { idList: id, title: title },
      {
        headers: {
          'auth-superman': getToken(),
        }
      }
    )
      .then(response => {  
        window.location.reload()
      }).catch(err => {
        console.log(err.response.data.message)
      })
  }
 

  const handleBtnConfirm = () => {
    if (type === 'card') {
      // addMoreCard(title, id)
      setTitle('')
      setOpen(false)
      addCard()
    } else {
      // addMoreList(title)
      setTitle('')
      setOpen(false)
      addList()
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