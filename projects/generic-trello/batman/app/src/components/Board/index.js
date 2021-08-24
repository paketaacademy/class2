import React, { useState } from 'react'
import List from '../List'
import { Container } from './styles'
import { loadLists } from '../../Services/api.js'
import BoardContext from './context'
import produce from 'immer'

const data = loadLists()

export default function Board() {
  const [lists, setLists] = useState(data)

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      console.log(`fromList: ${fromList} - toList: ${toList} - from: ${from} - to: ${to}`)
      const dragged = draft[fromList].cards[from]
      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged)
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  )
}