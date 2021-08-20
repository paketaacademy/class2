import InputBase from '@material-ui/core/InputBase'
import React from 'react'
import ClearIcon from '@material-ui/icons/Clear'
import { Card, BtnConfirm, Confirm } from './style.js'
import IconButton from '@material-ui/core/IconButton'

export default function InputCard(setOpen) {
  return (
    <div>
      <Card>
        <InputBase
          multiline
          onBlur={() => setOpen(false)}
          fullWidth
          inputProps={{
            //classes: classes.input, 
          }}
          placeholder="Enter a title of this card..." />
      </Card>
      <Confirm>
        <BtnConfirm onClick={() => setOpen(false)}> Add Card</BtnConfirm>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Confirm>
    </div>
  )
}