import React from 'react'
import axios from 'axios'
import { Btn } from '../Button'
import { FormContainer } from '../ContainerForms'
import { TxtField } from '../TxtField'
import { Container } from '../ContainerForms'
import { DivContainerBtn } from './styles'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { passwordSchema } from '../../Validations/PasswordValidation'
import { yupResolver } from '@hookform/resolvers/yup'

export const Register = () => {
  let history = useHistory()
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(passwordSchema) })

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const handleSubmitForm = async (data) => {
    await sleep(2000)
    let userData = {
      firstName: data.firstName,
      lastName: data.lasfName,
      email: data.email,
      password: data.password
    }
    axios.post("http://localhost:3030/register", userData)
      .then((response) => {
        console.log(userData)
        history.push('/login')
      })
  }

  return (
    <Container>
      <FormContainer>
        <h2>Registrar</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) =>
              <TxtField
                {...field}
                label="Nome"
                variant="outlined"
                size="small"
                required
              />
            }
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) =>
              <TxtField
                {...field}
                label="Sobrenome"
                variant="outlined"
                size="small"
                required
              />
            }
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) =>
              <TxtField
                {...field}
                label="E-mail"
                variant="outlined"
                size="small"
                required
              />
            }
          />
          <Controller
            name="confirmEmail"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) =>
              <TxtField
                {...field}
                label="Cofirm e-mail"
                variant="outlined"
                size="small"
                required
              />
            }
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) =>
              <TxtField
                {...field}
                label="Password"
                variant="outlined"
                size="small"
                type="password"
                error={errors.password}
                helperText={errors.password?.message}
                required
              />
            }
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) =>
              <TxtField
                {...field}
                label="Confirm password"
                variant="outlined"
                size="small"
                type="password"
                required
                error={errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            }
          />
          <DivContainerBtn>
            <Btn variant="contained" color="primary" type="submit">Registrar</Btn>
            <Btn color="inherit">Cancelar</Btn>
          </DivContainerBtn>
        </form>
      </FormContainer>
    </Container>
  )
}

// (data) => {
//   data.email === data.confirmEmail &&
//     data.password === data.confirmPassword ?
//     userData = {
//       firstName: data.firstName,
//       lastName: data.lastName,
//       email: data.email,
//       password: data.password
//     } :
//     alert("Erro!")
// }