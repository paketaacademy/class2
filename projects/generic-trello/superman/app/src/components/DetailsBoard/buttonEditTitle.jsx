import React, { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import { useHistory } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useParams } from "react-router"
import Snackbar from '@material-ui/core/Snackbar'
import { getToken } from '../../Services/auth.js'
import MuiAlert from '@material-ui/lab/Alert'
import CreateIcon from '@material-ui/icons/Create';
import { ModalBox, PaperBox, BoxDetails, ButtonEdit } from './style.js'

export default function ButtonEditTitle({titleBoard}) {

  let { id } = useParams()
  const [open, setOpen] = useState(false)
  const API = process.env.REACT_APP_API_URL

  const [title, setTitle] = useState(titleBoard)
  const [severity, setSeverity] = useState('')
  const [resAPI, setResAPI] = useState('')
  const [openMSG, setOpenMSG] = useState(false)

  const handleChange = e => {    
    setTitle(e.target.value)
  }

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  const handleSubmit = e => {
    e.preventDefault()    
    axios.patch(`${API}/board/title`, { idBoard: id, title: title },
      {
        headers: {
          'auth-superman': getToken(),
        }
      })
      .then(response => {     
        window.location.reload()
      }).catch(err => {
        console.log(err.response.data)       

      })
  }

  const handleCloseMSG = (event) => {
    setOpenMSG(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  console.log("title", titleBoard)
  return (
    <div>
      <Snackbar open={openMSG} autoHideDuration={6000} onClose={handleCloseMSG}>
        <Alert severity={severity}>
          {resAPI}
        </Alert>
      </Snackbar>
      <ButtonEdit variant="contained" color="secondary" onClick={handleOpen}>
          <CreateIcon />
        </ButtonEdit>
      <ModalBox
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

          <PaperBox>
            <form onSubmit={handleSubmit}>
              <BoxDetails>
                <TextField
                  id="title"
                  name="title"
                  label="Nome do Quadro"
                  variant="outlined"
                  color="secondary"
                  defaultValue = {titleBoard}
                  onChange={handleChange}
                />
              </BoxDetails>
              <BoxDetails>
                <Button type="submit" variant="contained" color="primary">
                  Salvar
                </Button>
              </BoxDetails>
            </form>
          </PaperBox>
        </Fade>
      </ModalBox>
    </div>
  )
}