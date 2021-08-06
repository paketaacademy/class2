import { TxtField } from "../TxtField";
import { Btn } from "../Button";
import { Container, FormContainer } from "../ContainerForms"
import { DivContainerBtn } from "./styles";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export const Login = () => {
  const { control, handleSubmit } = useForm()
  const handleWithLogin = (data) => {
    let userData = {
      email: data.email,
      password: data.password
    }

    axios.get("http://localhost:3030/login", userData)
      .then(response => {
        console.log("logado")
      })
  }
  return (
    <Container>
      <FormContainer>
        <h2>Login</h2>
        <form autoComplete="off" onSubmit={handleSubmit(handleWithLogin)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => {
              <TxtField
                {...field}
                label="E-mail"
                variant="outlined"
                autoFocus={true}
              />
            }}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => {
              <TxtField
                {...field}
                label="Password"
                variant="outlined"
                type="password"
              />
            }}
          />
          <DivContainerBtn>
            <Btn StyledBtn variant="contained" color="primary">Login</Btn>
          </DivContainerBtn>
        </form>
        <span className="form-container-login--span">Não possui cadastro? <strong onClick={() => console.log("Clicou!")}>Registre-se</strong></span>
      </FormContainer>
    </Container>
  )
}