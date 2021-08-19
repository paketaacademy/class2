import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, BoxContent, Icon } from '../Perfil/style.js'
import { ModalBox, PaperBox, BoxDetails } from './style.js'

export default function ModalCreateBoard() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box elevation={3} onClick={handleOpen}>
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
            <BoxDetails>
              <TextField
                id="outlined-secondary"
                label="Nome do Quadro"
                variant="outlined"
                color="secondary"
              />
            </BoxDetails>
            <BoxDetails>
              <Button variant="contained" color="primary">
                Criar
              </Button>
            </BoxDetails>
          </PaperBox>
        </Fade>
      </ModalBox>
    </div>
  );
}
