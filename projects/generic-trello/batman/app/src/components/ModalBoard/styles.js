import styled from "styled-components"
import { Button, TextField } from "@material-ui/core"
import Modal from "react-modal"

export const AddBoard = styled(Button)`
  background-color: ${(props) => props.bgcolor || "rgb(255, 235, 80)"};
  color: ${(props) => props.fontcolor || "rgb(0, 0, 0)"};
  &:hover{
    background-color: ${(props) => props.hovercolor || "rgb(255, 235, 00)"}
  }
`

export const StyledModal = styled(Modal)`
  position: absolute;
  inset: 20%;
  background-color: rgb(218 165 32);;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  max-width: 200px;
  text-transform: capitalize;
 
`

export const Div = styled.div`
  display: flex;
   margin: 24px 0;
   color: red;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  .MuiInputBase-input{
    background-color: rgb(255, 255, 255);
  }
  .Mui-focused{
    color: rgb(0, 0, 0);
    max-width: 200px;  
  }
  .Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: rgb(0, 0, 0);
    
  }
  .MuiOutlinedInput-multiline.MuiOutlinedInput-marginDense{
    background-color: rgb(255, 255, 255);
    
  }
`

export const TxtField = styled(TextField)`
  margin: 16px 0;  

`

export const CreateButton = styled.div`
  color:rgb(255, 255, 255);
`

