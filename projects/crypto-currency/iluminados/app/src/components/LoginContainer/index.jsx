import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Btn } from "../Button";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-family: var(--secondary-font-family);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  h2{
    font-family: var(--primary-font-family);
    font-size: 1.7rem;
    margin: 0 0 16px 0;
    text-transform: uppercase;
    color: var(--black);
  }
  .form-container-login--span{
    font-size:0.80rem;
    margin: 16px 0 0 0;
    strong{
      cursor: pointer;
      &:hover{
        color: var(--yellow);
      }
    }
  }
`

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

const StyledBtn = styled(Btn)`
  &&{
    align-self: start;
    font-family: var(--primary-font-family);
  }
`


export const FormContainerLogin = () => {
  return (
    <Container>
      <FormContainer>
        <h2 className="form-container-login--h2">Login</h2>
        <form action="POST" autoComplete="off">
          <TxtField
            id="standard-required"
            label="E-mail"
            variant="outlined"
          />
          <TxtField
            id="standard-required"
            label="Password"
            variant="outlined"
            type="password"
          />
        </form>
        <StyledBtn variant="contained" color="primary">Login</StyledBtn>
        <span className="form-container-login--span">Não possui cadastro? <strong onClick={() => console.log("Clicou!")}>Registre-se</strong></span>
      </FormContainer>
    </Container>
  )
}