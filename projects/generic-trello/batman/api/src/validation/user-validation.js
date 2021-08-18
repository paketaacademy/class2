import * as yup from 'yup'

export const UserSchema = yup.object().shape({
  firstName: yup.string().trim().required('nome requerido.'),
  lastName: yup.string().required('sobrenome requerido.'),
  email: yup.string().email('cadastrar um e-mail válido.').required('email requerido'),
  password: yup.string().min(6, 'mínimo de 6 caracteres.').required()
})

