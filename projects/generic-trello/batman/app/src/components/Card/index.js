import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Container, P, Button } from './styles'
import BoardContext from '../Board/context'
import axios from 'axios'
import { getToken } from '../../Services/auth'
import { MdClear } from 'react-icons/md'

export default function Card({ data, index, listIndex }) {
  const ref = useRef()
  const { move } = useContext(BoardContext)

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex, id: data._id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop(item, monitor) {
      const currentList = item.listIndex
      const targetList = listIndex
      const cardId = item.id
      if (currentList == targetList) {
        return
      }

      move(targetList, cardId)
    }
  })

  const handleDelete = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3030/card`, { headers: { "auth-token": getToken() } , data:{ cardId: data._id } })
      .then(response => {
        console.log(response)
        window.location.reload()
      }).catch((err) => {
        console.log(err)
      })
  }

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging} >
      <Button type='button' onClick={handleDelete} key={data._id} >
            <MdClear size={15}/>
      </Button>
      <P contenteditable="true">{data.title}</P>
      <P contentEditable="true">{data.description}</P>
    </Container>

  )
}