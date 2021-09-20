import * as yup from 'yup'

const LoginValidation = yup.object().shape({
  email: yup.string().email('Please, use a valid e-mail').required('Please, your e-mail is required'),
  password: yup.string().min(6, 'Please, your password must be a least 6 characters').required('Please, your password is rquired')
})

export default LoginValidation