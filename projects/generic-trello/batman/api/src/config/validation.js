import yup from 'yup'

const registerValidation = (data) => {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    sobrenome: yup.string().required(), 
    email: yup.string().min(6).email().required(),
    senha: yup.string().min(6).required(),
    })
    return schema.validate(data)
}

export {
  registerValidation
}