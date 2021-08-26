import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

export const ListContainer = styled.div`
listContainer: {
    display: flex;
    background-color:#000;
  }
`

export const ContainerBoard = styled.div`
  min-height: 100vh;
  background: green;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
`
export const DropList = styled(Droppable)`
  display: flex;  
  background-color: #000;
`
