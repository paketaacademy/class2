import { TxtField } from "../TxtField"
import { Button } from "../Button"
import { Container, FormContainer } from "../ContainerForms"
import { DivContainerBtn, InvalidAuth } from "./styles";
import { Link } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { login } from "../../Services/auth";

export const Login = () => {
  const { control, handleSubmit } = useForm()
  const [resp, setResp] = useState("")
  const [error, setError] = useState(false)
  let history = useHistory()

  const handleWithLogin = (data) => {
    const userData = {
      email: data.email,
      password: data.password
    }

    axios.post("http://localhost:3030/login", userData)
      .then((response) => {
        setResp(response.data)
        let headers = response.headers['Authorization']
        login(headers)
        console.log(headers)
        history.push("/noticias")
      })
      .catch((err) => {
        setError(true)
        console.log(resp)
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
          {error === true &&
            <InvalidAuth>Email ou senha inválido</InvalidAuth>
          }
          <DivContainerBtn>
            <Button Variant="contained" Color="primary" Type="submit">Login</Button>
          </DivContainerBtn>
        </form>
        <span className="form-container-login--span">Não possui cadastro?<Link to="/registrar"><strong> Registre-se</strong></Link></span>
      </FormContainer>
    </Container>
  )
}