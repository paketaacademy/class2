import * as yup from 'yup'

export const platoonValidationSchema = yup.object().shape({
  namePlatoon: yup.string().required('Name platoon is required.'),
  platoonCommander: yup.string().required('Platoon Commander is required.'),
  soldiers: yup.array().required()
})