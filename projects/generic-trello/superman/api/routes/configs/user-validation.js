import * as yup from 'yup'
  
  export const userSchema = yup.object().shape({
    name: yup.string().trim().min(9, 'Nome deve possuir mais de 9 caracteres').required(),
    email: yup.string().trim().min(9, 'Email deve possuir mais de 9 caracteres').email('Digite um email válido!').required(),
    password: yup.string().min(6, 'Senha deve possuir mais de 6 caracteres').required(),
  })