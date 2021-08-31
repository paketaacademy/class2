import styled from "styled-components"
import { Button, TextField } from "@material-ui/core"
import Modal from "react-modal"

export const AddBoard = styled(Button)`
  background-color: ${(props) => props.bgcolor || "rgb(255, 235, 00)"};
  color: ${(props) => props.fontcolor || "rgb(0, 0, 0)"};
  &:hover{
    background-color: ${(props) => props.hovercolor || "rgb(255, 235, 80)"};
  }
`

export const StyledModal = styled(Modal)`
  position: absolute;
  inset: 28%;
  border: 1px solid rgb(204, 204, 204);
  background-color: rgb(255, 235, 80);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  height: 290px;
  
  .actions-buttons{
    display: flex;
    margin: 24px 0;
    .cancel-button-container{
      margin: 0 0 0 24px;
    }
  }
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