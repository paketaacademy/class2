import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import List from '../List/list'
import StoreApi from '../../utils/storeApi'
import InputContainer from '../Input/inputContainer'
import { DragDropContext } from 'react-beautiful-dnd'
import { ContainerBoard, ListContainer, DropList } from './style.js'
import { getToken } from '../../Services/auth'

export default function Board() {
  const [data, setData] = useState([])

  const addMoreCard = (title, listId) => {
    const newCardId = uuid()
    const newCard = {
      id: newCardId,
      title,
    }

    const list = data.find((list) => list._id == listId)
    list.cards = [...list.cards, newCard]

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    }
    setData(newState)
  }

  const addMoreList = (title) => {
    const newListId = uuid()
    const newList = {
      id: newListId,
      title,
      cards: [],
    }
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    }
    setData(newState)
  }

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId]
    list.title = title

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    }
    setData(newState)
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    if (type != 'list') {
      axios.patch(`${API}/card`, { idCard: draggableId, idList: destination.droppableId },
        {
          headers: {
            'auth-superman': getToken(),
          }
        }
      )
        .then(response => {
          window.location.reload()
        }).catch(err => {
          console.log(err.response.data.message)
        })
    }
  }

  let { id } = useParams()
  const API = process.env.REACT_APP_API_URL
  const [listAll, setListAll] = useState([])

  useEffect(() => {
    fetch(
      `${API}/list/${id}`,
      {
        method: 'get',
        headers: new Headers({
          'auth-superman': getToken(),
        })
      },
    )
      .then(async response => {
        const data = await response.json()
        setListAll(data)
        setData(data)

      })
      .catch(error => console.log(error))
  }, [API, setListAll])

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <ContainerBoard>
        <DragDropContext onDragEnd={onDragEnd}>
          <DropList droppableId="app" type="list" direction="horizontal">
            {(provided) => (
              <ListContainer style={{ display: "flex" }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >                
                {
                  listAll.length > 0 && listAll.map((item, index) => {
                    return <List list={item} idList={item._id} titleList={item.title} key={item._id} index={index} />
                  }
                  )                  
                }
                <InputContainer id={id} type="list" />
                {provided.placeholder}
              </ListContainer>
            )}
          </DropList>
        </DragDropContext>
      </ContainerBoard>
    </StoreApi.Provider>
  )
}