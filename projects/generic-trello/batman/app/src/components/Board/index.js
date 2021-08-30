import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import List from '../List'
import { Container } from './styles'
import BoardContext from './context'
import produce from 'immer'
import { getToken } from '../../services/auth'
import Modal from '@material-ui/core/Modal'
import { MdAdd } from 'react-icons/md'
import { ButtonNew } from '../List/styles'
import FormList from '../Form-List'

export default function Board() {
  const [lists, setLists] = useState([])
  const [lista2, setLista2] = useState([])
  const [load, setLoad] = useState(false)
  const [openList, setOpenList] = useState(false)
  const [open, setOpen] = React.useState(false)


  const { id } = useParams()
  const urlList = `http://localhost:3030/list/${id}`
  useEffect(() => {
    if (load) {
      return
    }
    axios.get(urlList, { headers: { "auth-token": getToken() } })
      .then(response => {
        const responseAboutListData = response.data
        setLists(responseAboutListData)
        setLoad(true)
      }).catch(err=>{
        console.log(err.message)
      })
  }, [])

  function move(targetList, cardId) {
    console.log("targetList: ", targetList)
    console.log("CardID", cardId)
    const data = {
      listId: targetList,
      cardId: cardId
    }
    axios.patch("http://localhost:3030/card", data, { headers: { "auth-token": getToken() } })
      .then(response => {
        console.log("Resposta Board", response)
        window.location.reload()
      }).catch(error => {
        console.log(error)
      })
  }

  const handleClickOpenList = () => {
    setOpenList(true)
  }


  const handleCloseList = () => {
    setOpenList(false)
  }


  const handleClose = () => {
    setOpen(false)
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <ButtonNew type="button" onClick={handleClickOpenList}>
        <MdAdd size={24} color='#fff' />
      </ButtonNew>
      <Modal
        open={openList}
        onClose={handleCloseList}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <FormList open={openList} idBoard={id} handleClose={handleClose} />
      </Modal>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} idList={list._id} />)}
      </Container>
    </BoardContext.Provider>
  )
}