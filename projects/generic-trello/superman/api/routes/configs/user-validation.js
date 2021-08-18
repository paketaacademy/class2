import * as yup from 'yup'
  
  export const userSchema = yup.object().shape({
    name: yup.string().trim().min(9, 'Quantidade de caracteres deve ser maior que 9').required(),
    email: yup.string().trim().min(9, 'Quantidade de caracteres deve ser maior que 9').email().required(),
    password: yup.string().min(6, 'Quantidade de caracteres deve ser maior que 6').required(),
  })


