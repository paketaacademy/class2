import * as yup from 'yup'

export const vehicleValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  description: yup.string().required('Description is required.'),
  weight: yup.string().required('Weight is required.'),
  length: yup.string().required('Lenght is required.'),
  width: yup.string().required('Width is required.'),
  height: yup.string().required('Height is required.'),
  crew: yup.string().required('Crew is required.'),
  armor: yup.string().required('Armor is required.'),
  armament: yup.string().required('Armament is required.'),
})