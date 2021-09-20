import * as yup from 'yup'

export const equipmentValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  description: yup.string().required('Description is required.')
})