import * as yup from 'yup'

export const BoardSchema = yup.object().shape({
  name: yup.string().min(3, 'mínimo de três letras').required('necessário adicionar nome.'),
  description: yup.string().max(500, 'máximo de 500 caracteres.'),
   users: yup.string().required('necessário adicionar um usuário.')
})
