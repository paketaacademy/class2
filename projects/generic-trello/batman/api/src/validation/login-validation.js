import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
  email: yup.string().email('e-mail inválido.').required(),
  password: yup.string().min(6, 'senha inválida.').required()
})

