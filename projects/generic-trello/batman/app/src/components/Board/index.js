import axios from 'axios'
import React, { useEffect, useState} from 'react'
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
  const urlList= `http://localhost:3030/list/${id}`
  useEffect(()=>{
    if(load){
      return
    }
    axios.get(urlList, { headers: { "auth-token": getToken() } })
      .then(response => {
        const responseAboutListData = response.data
        setLists(responseAboutListData)
        setLoad(true)
  })
  },[])
  let list_id = ''
  lists.map(lm => {
    list_id = lm._id
  })
  console.log(list_id)
  useEffect(() => {
    axios.get('http://localhost:3030/card/list/6127e9c22d10ed34f889b901', { headers: { "auth-token": getToken() } })
    .then(response => {
      const responseList = response.data
      setLista2(responseList)
      console.log('teste:', response.data)

    }).catch(error => {
      console.log('carol:',error.message)
    })
  },[])
  
  function move(targetList, cardId) {
    
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} idList={list._id} />)}
      </Container>
    </BoardContext.Provider>
  )
}