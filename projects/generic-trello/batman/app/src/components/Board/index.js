import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import List from '../List'
import { Container } from './styles'
import BoardContext from './context'
import produce from 'immer'
import { getToken } from '../../services/auth'

export default function Board() {
  const [lists, setLists] = useState([])
  const [lista2, setLista2] = useState([])
  const [load, setLoad] = useState(false)
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

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} idList={list._id} />)}
      </Container>
    </BoardContext.Provider>
  )
}