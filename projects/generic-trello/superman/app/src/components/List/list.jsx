import React from 'react'
import { useState, useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import { ContainerList, ContainerCard } from './style.js'
import Title from './title'
import Card from '../Card'
import InputContainer from '../Input/inputContainer'
import { getToken } from '../../Services/auth'
import { Droppable, Draggable } from 'react-beautiful-dnd'

export default function List({ list, index }) {

  const API = process.env.REACT_APP_API_URL
  const [cardAll, setCardAll] = useState([])
  const listId = list._id

  console.log('lista', listId)
  useEffect(() => {
    fetch(
      `${API}/card/${listId}`,
      {
        method: 'get',
        headers: new Headers({
          'auth-superman': getToken(),
        }),
      },
    )
      .then(async response => {
        const data = await response.json()
        setCardAll(data)
      })
      .catch(error => console.log(error))
  }, [API, setCardAll])

  console.log('card', cardAll)

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <ContainerList {...provided.dragHandleProps}>
            <CssBaseline />

            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <ContainerCard
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {cardAll.length > 0 && cardAll.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </ContainerCard>
              )}
            </Droppable>
            <InputContainer listId={list.id} type="card" />
          </ContainerList>
        </div>
      )}
    </Draggable>
  )
}