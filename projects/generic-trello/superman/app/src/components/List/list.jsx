import React from 'react'
import { useState, useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import { ContainerList, ContainerCard } from './style.js'
import Title from './title'
import Card from '../Card'
import InputContainer from '../Input/inputContainer'
import { getToken } from '../../Services/auth'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import ButtonEditTitleList from './buttonEditTitleList.jsx'

export default function List({ list, index }) {

  const API = process.env.REACT_APP_API_URL
  const [cardAll, setCardAll] = useState([])
  const listId = list._id

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
  
  return (
    <Draggable draggableId={list._id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <ContainerList {...provided.dragHandleProps}>
            <CssBaseline />

            <Title title={list.title} listId={list._id} />        
            <ButtonEditTitleList listId={list._id} titleList={list.title} />    
            <Droppable droppableId={list._id}>
              {(provided) => (
                <ContainerCard
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {
                  cardAll.length > 0 && cardAll.map((card, index) => (
                    <Card key={card._id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </ContainerCard>
              )}
            </Droppable>
            <InputContainer id={list._id} type="card" />
          </ContainerList>
        </div>
      )}
    </Draggable>
  )
}