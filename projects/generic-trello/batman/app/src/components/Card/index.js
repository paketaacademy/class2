import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Container, Label , Header , P , Image} from './styles'
import BoardContext from '../Board/context'
import { green } from '@material-ui/core/colors'

export default function Card({ data, index, listIndex }) {
  const ref = useRef()
  const { move } = useContext(BoardContext)

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex, id:data._id },
    collect: monitor => ({
      isDragging : monitor.isDragging(),
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

  dragRef(dropRef(ref))
  
  return (
    <Container ref={ref} isDragging={isDragging} >
      <Header>
        <Label key={"green"} color={"green"}/>
      </Header>
      <P contenteditable="true">{data.title}</P>
      <P contentEditable="true">{data.description}</P>
      { data.users && <Image src={data.users} alt='people image'/> }
    </Container>   
    
  )
}