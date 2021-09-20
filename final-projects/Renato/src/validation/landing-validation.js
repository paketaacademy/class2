import * as yup from 'yup'

export const landingValidationSchema = yup.object().shape({
  namePlatoon: yup.array().required('Name platoon is required.'),
  nameVehicle: yup.array().required('Name vehicle is required.'),
  landingPlace: yup.string().required('Landing place is required.'),
  arrivalTime: yup.string().required('Arrival time is required.')
})