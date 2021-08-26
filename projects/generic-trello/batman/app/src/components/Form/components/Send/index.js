import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import { SubmitButton } from './style.js' 

export default function Send() {

  return (
    <>
      <SubmitButton
        variant="contained"
        size="small"
        startIcon={<SaveIcon />}
      >
        Salvar
      </SubmitButton>
      <SubmitButton
        variant="contained"
        size="small"
        startIcon={<DeleteIcon />}
      >
        Cancelar
      </SubmitButton>
    </>
  )
}
