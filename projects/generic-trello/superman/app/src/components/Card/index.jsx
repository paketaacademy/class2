import React from 'react'
import { BoxCard } from './style.js'
import { Draggable } from 'react-beautiful-dnd'
import ButtonEditTitleCard from '../Card/buttonEditTitleCard.jsx'

export default function Card({ card, index, listId }) {

  return (
    <Draggable draggableId={card._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <BoxCard>
            <div>{card.title}</div>
            <ButtonEditTitleCard listId={listId} cardId={card._id} titleCard={card.title} />
          </BoxCard>
        </div>
      )}
    </Draggable>
  )
}