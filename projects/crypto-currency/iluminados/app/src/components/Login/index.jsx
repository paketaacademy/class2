import { TxtField } from "../TxtField"
import { Button } from "../Button"
import { Container, FormContainer } from "../ContainerForms"
import { DivContainerBtn } from "./styles";
import { Link } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const { control, handleSubmit } = useForm()
  let history = useHistory()

  const handleWithLogin = (data) => {
    const userData = {
      email: data.email,
      password: data.password
    }
    console.log(userData)

    axios.post("http://localhost:3030/login", userData)
      .then((response) => {
        console.log(response)
        history.push("/noticias")
      })

  }
  return (
    <Container>
      <FormContainer>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleWithLogin)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) =>
              <TxtField
                {...field}
                label="E-mail"
                variant="outlined"
                autoFocus={true}
              />
            }
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) =>
              <TxtField
                {...field}
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