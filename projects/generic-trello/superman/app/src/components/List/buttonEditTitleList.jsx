import React, { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useParams } from "react-router"
import Snackbar from '@material-ui/core/Snackbar'
import { getToken } from '../../Services/auth.js'
import MuiAlert from '@material-ui/lab/Alert'
import { ModalBox, PaperBox, BoxDetails, OptionMore } from './style.js'

export default function ButtonEditTitleList({ listId, titleList }) {

  let { id } = useParams()
  const [open, setOpen] = useState(false)
  const API = process.env.REACT_APP_API_URL
  const [title, setTitle] = useState(titleList)
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
    axios.patch(`${API}/list`, { idList: listId, title: title },
      {
        headers: {
          'auth-superman': getToken(),
        }
      })
      .then(response => {     
        window.location.reload()
      }).catch(err => {
        setResAPI(err.response.data)
        setSeverity('error')       
        setOpen(false)
        setOpenMSG(true)
      })
  }

  const handleDelete = e => {
    e.preventDefault()    
    axios.delete(`${API}/list`,
      {
        headers: {
          'auth-superman': getToken(),
        },
        data: { idList: listId, idBoard: id }
      })
      .then(response => {   
        console.log(response)  
        window.location.reload()
      }).catch(err => {
        setResAPI(err.response.data)
        setSeverity('error')       
        setOpen(false)
        setOpenMSG(true)   
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
  
  return (
    <div>
      <Snackbar open={openMSG} autoHideDuration={6000} onClose={handleCloseMSG}>
        <Alert severity={severity}>
          {resAPI}
        </Alert>
      </Snackbar>
      <OptionMore onClick={handleOpen}>
          ...
        </OptionMore>
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
            <form >
              <BoxDetails>
                <TextField
                  id="title"
                  name="title"
                  label="Nome do Quadro"
                  variant="outlined"
                  color="secondary"
                  defaultValue = {titleList}
                  onChange={handleChange}
                />
              </BoxDetails>
              <BoxDetails>
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                  Salvar
                </Button>
                <Button type="submit" variant="contained" color="secondary" onClick={handleDelete}>
                  Excluir
                </Button>
              </BoxDetails>
            </form>
          </PaperBox>
        </Fade>
      </ModalBox>
    </div>
  )
}