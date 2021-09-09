import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  userName: yup.string().trim().required('Name is required'),
  cpf: yup.number().min(11, 'Maximum of 11 characters').required('CPF is required'),
  password: yup.string().min(6, 'Minimum of 6 characters').required('Password is required')
})