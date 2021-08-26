import React, { useState, useContext } from 'react'
import { InputBase } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import storeApi from '../../utils/storeApi'
import { editableTitleContainer, editableTitle } from './style.js'

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const { updateListTitle } = useContext(storeApi)
  const handleOnChange = (e) => {
    setNewTitle(e.target.value)
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId)
    setOpen(false);
  }
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              // className: classes.input,
            }}
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
          <MoreHorizIcon />
        </editableTitleContainer>
      )}
    </div>
  )
}