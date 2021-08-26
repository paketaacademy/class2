import React from 'react'
import { BoxCard } from './style.js'
import { Draggable } from 'react-beautiful-dnd'

export default function Card({ card, index }) {

  return (
    <Draggable draggableId={card._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <BoxCard>{card.title}</BoxCard>
        </div>
      )}
    </Draggable>
  )
}