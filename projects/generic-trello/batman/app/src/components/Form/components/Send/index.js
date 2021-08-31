import React from 'react'
import SaveIcon from '@material-ui/icons/Save'
import { SubmitButton } from './style.js' 

export default function Send(props) {

  const handleClick =()=>{

  }

  return (
    <>
      <SubmitButton
        variant="contained"
        size="small"
        startIcon={<SaveIcon />}
        type={props.type}
        onClick={handleClick}
      >
        Salvar
      </SubmitButton>
    </>
  )
}
