import styled from 'styled-components'
import Modal from '@material-ui/core/Modal';

export const ModalBox = styled(Modal)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
  `
  }`

export const PaperBox = styled.div`
  ${({ theme }) => `    
    background-color: ${theme.palette.background.paper};
    border: 2px solid #000;
    box-shadow: ${theme.shadows[5]}px;
    padding: ${theme.spacing(2, 4, 3)}px;
    display: flex;
    flex-direction: column;
    padding: 15px;
  `
  }`
export const BoxDetails = styled.div`
  ${({ theme }) => `    
    margin: 10px;
    display: flex;
    justify-content: center;
  `
  }`
  