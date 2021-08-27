import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Container, Label , Header , P , Image} from './styles'
import BoardContext from '../Board/context'
import { green } from '@material-ui/core/colors'

export default function Card({ data, index, listIndex }) {
  const ref = useRef()
  const { move } = useContext(BoardContext)

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging : monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex
      const targetListIndex = listIndex
      const draggedIndex = item.index
      const targetIndex = index

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return
      }

      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = (targetSize.bottom - targetSize.top) / 2
      
      const draggedOffSet = monitor.getClientOffset()
      const draggedTop = draggedOffSet.y - targetSize.top

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex)

      item.index = targetIndex
      item.listIndex = targetListIndex

    }
  })

  dragRef(dropRef(ref))
  
  return (
    <Container ref={ref} isDragging={isDragging}>
      <Header>
        <Label key={"green"} color={"green"}/>
      </Header>
      <P contenteditable="true">{data.title}</P>
      <P contentEditable="true">{data.description}</P>
      {/* { data.users && <Image src={data.users} alt='people image'/> } */}
    </Container>   
    
  )
}