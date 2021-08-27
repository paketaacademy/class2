import React, { useState, useContext } from 'react'
import { InputBase } from '@material-ui/core'
import storeApi from '../../utils/storeApi'

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const { updateListTitle } = useContext(storeApi)
  const handleOnChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId)
    setOpen(false)
  }
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            fullWidth
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <editableTitleContainer >
          <editableTitle
            onClick={() => setOpen(!open)}
          >
            {title}
          </editableTitle>
        </editableTitleContainer>
      )}
    </div>
  )
}