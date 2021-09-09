import * as yup from 'yup'

const RegisterValidation = yup.object().shape({
  firstName: yup.string().trim().required('Please, your first name is required'),
  lastName: yup.string().trim().required('Please, your last name is required'),
  email: yup.string().email('Please, use a valid e-mail').required('Please, your email is required'),
  password: yup.string().min(6, 'Please your password must be a least 6 characters').required('Please, your password is required')
})
export default RegisterValidation