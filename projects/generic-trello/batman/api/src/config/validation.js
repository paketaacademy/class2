import yup from 'yup'

const registerValidation = (data) => {
  const schema = yup.object().shape({
    fristName: yup.string().required(),
    lastName: yup.string().required(), 
    email: yup.string().min(6).email().required(),
    password: yup.string().min(6).required(),
    })
    return schema.validate(data)
}

export {
  registerValidation
}