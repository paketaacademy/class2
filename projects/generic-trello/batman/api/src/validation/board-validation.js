import * as yup from 'yup'

export const BoardSchema = yup.object().shape({
  title: yup.string().min(3, 'Mínimo de três letras').required('Necessário adicionar nome.'),
  description: yup.string().max(500, 'Máximo de 500 caracteres.'),
  owner: yup.string().required('Necessário adicionar o proprietário do board.')
})

export const BoardUpdateSchema = yup.object().shape({
  title: yup.string().min(3, 'Mínimo de três letras'),
  description: yup.string().max(500, 'Máximo de 500 caracteres.'),
  email: yup.string().email()
})
