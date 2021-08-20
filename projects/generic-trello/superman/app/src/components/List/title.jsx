import React, {useState} from 'react'
import { InputBase } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { EditableTitleContainer, EditableTitle } from './style.js'

export default function Title() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            value="To do"
            inputProps={{
              //className: classes.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <EditableTitleContainer>
          <EditableTitle onClick={() => setOpen(!open)}> To do </EditableTitle>
          <MoreHorizIcon />
        </EditableTitleContainer>
      )}
    </div>
  )
}