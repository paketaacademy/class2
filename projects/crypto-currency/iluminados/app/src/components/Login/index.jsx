import { TxtField } from "../TxtField";
import { Btn } from "../Button";
import { Container, FormContainer } from "../ContainerForms"
import { DivContainerBtn } from "./styles";
import { Link } from "react-router-dom";


export const Login = () => {
  return (
    <Container>
      <FormContainer>
        <h2>Login</h2>
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
        <DivContainerBtn>
          <Btn StyledBtn variant="contained" color="primary">Login</Btn>
        </DivContainerBtn>
        <span className="form-container-login--span">Não possui cadastro? <Link to="/registrar"><strong>Registre-se</strong></Link></span>
      </FormContainer>
    </Container>
  )
}