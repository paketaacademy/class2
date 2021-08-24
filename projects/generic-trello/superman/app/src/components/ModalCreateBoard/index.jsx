import React, { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import { useHistory } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import { getToken } from '../../Services/auth.js'
import MuiAlert from '@material-ui/lab/Alert'
import { Box, BoxContent, Icon } from '../Perfil/style.js'
import { ModalBox, PaperBox, BoxDetails } from './style.js'

export default function ModalCreateBoard() {

  const history = useHistory()
  const [open, setOpen] = useState(false)
  const API = process.env.REACT_APP_API_URL

  const [title, setTitle] = useState('')

  const [openMSG, setOpenMSG] = useState(false)
  const [resAPI, setResAPI] = useState('')
  const [severity, setSeverity] = useState('')

  const handleChange = e => {    
    setTitle(e.target.value)
  }

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  const handleSubmit = e => {
    e.preventDefault()    
    axios.post(`${API}/board`, { title },
      {
        headers: {
          'auth-superman': getToken(),
        }
      })
      .then(response => {
        const { id, message} = response.data        
        setResAPI(message)
        setSeverity('success')
        setOpenMSG(true)
        history.push(`/quadro/${id}`)        
      }).catch(err => {
        setResAPI(err.response.data)       
        setSeverity('error')
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
      <Box elevation={3} onClick={handleOpen} >
        <BoxContent>Adicionar um novo quadro</BoxContent><Icon />
      </Box>
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
                  onChange={handleChange}
                />
              </BoxDetails>
              <BoxDetails>
                <Button type="submit" variant="contained" color="primary">
                  Criar
                </Button>
              </BoxDetails>
            </form>
          </PaperBox>
        </Fade>
      </ModalBox>
    </div>
  )
}