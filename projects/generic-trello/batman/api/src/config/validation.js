import yup from 'yup'

const registerValidation = (data) => {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    sobrenome: yup.string().required(), 
    email: yup.string().min(6).email(),
    senha: yup.string().min(6),
    })
    return schema.validate(data)
}

export {
  registerValidation
}