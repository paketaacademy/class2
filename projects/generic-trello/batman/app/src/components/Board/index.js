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
        console.log(responseAboutListData)
        setLists(responseAboutListData)
        setLoad(true)
  })
  },[])
  
  
  

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      console.log(`fromList: ${fromList} - toList: ${toList} - from: ${from} - to: ${to}`)
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {console.log("ola", lists)}
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  )
}