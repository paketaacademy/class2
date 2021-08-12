import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  firstName: yup.string().min(3, "Nome não pode ter menos que 3 letras").matches(/[a-zA-Z]+$/, 'Nome pode conter apenas letras').required("Nome necessário"),
  lastName: yup.string().min(3, "Seu sobrenome não pode ter menos que 3 letras").matches(/[a-zA-Z]+$/, 'Sobrenome pode conter apenas letras').required("Sobrenome necessário"),
  email: yup.string().min(10, "Seu email não pode ter menos que 10 caracteres").max(64).matches(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/,
    'Email inválido'
  ).required("Email necessário"),
  confirmEmail: yup.string()
    .test('confirmEmail', 'Email diferente', function (value) {
      return this.parent.email === value
    }),
  password: yup.string().min(6, "Sua senha precisa ter no mínimo 6 caracteres").max(12, "Sua senha não pode ter mais que 12 caracteres").required("Password necessário"),
  confirmPassword: yup.string()
    .test('confirmPassword', 'Senha inválida', function (value) {
      return this.parent.password === value
    })
})