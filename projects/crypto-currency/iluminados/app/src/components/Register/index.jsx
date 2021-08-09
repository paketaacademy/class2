import React from 'react'
import axios from 'axios'
import { Button } from '../Button'
import { FormContainer } from '../ContainerForms'
import { TxtField } from '../TxtField'
import { Container } from '../ContainerForms'
import { ButtonContainer } from './styles'
import { useForm, Controller } from 'react-hook-form'
import { registerSchema } from '../../Validations/RegisterValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'

export const Register = () => {
  let history = useHistory()
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) })

  const handleSubmitForm = (data) => {
    let userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }
    console.log(userData)
    axios.post("http://localhost:3030/register", userData)
      .then((response) => {
        history.push("/")
      })
  }
  console.log("errors", errors)

  return (
    <Container>
      <FormContainer>
        <h2>Registrar</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) =>
              <TxtField
                {...field}
                label="Nome"
                variant="outlined"
                size="small"
                error={errors.name}
                helperText={errors.name?.message}
              />
            }
          />
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) =>
              <TxtField
                {...field}
                label="Sobrenome"
                variant="outlined"
                size="small"
                error={errors.lastName}
                helperText={errors.lastName?.message}
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
                {...field}
                label="E-mail"
                variant="outlined"
                size="small"
                error={errors.emailV}
                helperText={errors.email?.message}
              />
            }
          />
          <Controller
            name="confirmEmail"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) =>
              <TxtField
                {...field}
                label="Cofirmar e-mail"
                variant="outlined"
                size="small"
                error={errors.confirmEmail}
                helperText={errors.confirmEmail?.message}
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
                label="Senha"
                variant="outlined"
                size="small"
                type="password"
                error={errors.password}
                helperText={errors.password?.message}
              />
            }
          />
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) =>
              <TxtField
                {...field}
                label="Confirmar senha"
                variant="outlined"
                size="small"
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            }
          />
          <ButtonContainer>
            <Button Variant="contained" Color="primary" Type="submit">Registrar</Button>
            <Button>Cancelar</Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Container>
  )
}