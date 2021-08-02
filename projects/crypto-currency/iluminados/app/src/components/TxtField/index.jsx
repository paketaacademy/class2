import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const TxtField = styled(TextField)`
  &&{
    display: flex;
    margin-bottom: 16px;
    &:last-of-type{
      margin-bottom: 32px;
    }
    input{
      font-family: var(--secondary-font-family);
    }
    .Mui-focused fieldset,
    label.Mui-focused{
      border-color: var(--black);
      color: var(--black)
    }
  }
`