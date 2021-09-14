import * as yup from 'yup'

export const soldierValidationSchema = yup.object().shape({
  name: yup.string().trim().required('Name is required.'),
  age: yup.number().required('Age is required.'),
  cpf: yup.number().min(11, 'Maximum of 11 characters').required('CPF is required'),
  bloodType: yup.string().required('Blood Type is required.'),
  militarRank: yup.string().required('Militar Rank is required.'),
  equipment: yup.array().required('Equipment is required.')
})