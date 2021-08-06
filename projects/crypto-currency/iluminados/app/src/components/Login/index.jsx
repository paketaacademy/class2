import { TxtField } from "../TxtField"
import { Button } from "../Button"
import { Container, FormContainer } from "../ContainerForms"
import { DivContainerBtn } from "./styles";
import { Link } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form'
import axios from "axios";

export const Login = () => {
  const { control, handleSubmit } = useForm()
  // const handleWithLogin = (data) => {
  //   const userData = {
  //     email: data.email,
  //     password: data.password
  //   }

  //   axios.get

  //}
  return (
    <Container>
      <FormContainer>
        <h2>Login</h2>
        <form autoComplete="off">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) =>
              <TxtField
                label="E-mail"
                variant="outlined"
                autoFocus={true}
              />
            }
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) =>
              <TxtField
                label="Password"
                variant="outlined"
                type="password"
              />
            }
          />
          <DivContainerBtn>
            <Button Variant="contained" Color="primary" Type="submit">Login</Button>
          </DivContainerBtn>
        </form>
        <span className="form-container-login--span">Não possui cadastro?<Link to="/registrar"><strong> Registre-se</strong></Link></span>
      </FormContainer>
    </Container>
  )
}