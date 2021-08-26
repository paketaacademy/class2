import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ContainerList, ContainerCard } from './style.js'
import Title from './title'
import Card from '../Card'
import InputContainer from '../Input/inputContainer'
import { Droppable, Draggable } from 'react-beautiful-dnd'

export default function List({ list, index }) {
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
                  {list.cards.map((card, index) => (
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