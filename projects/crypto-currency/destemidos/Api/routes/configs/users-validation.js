import Joi from 'joi'

const singinValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(9).required().email,
    password: Joi.string().min(6).required()
  })
  return schema.validate(data)
}

const singupValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(9).required().email(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.ref('password'),
  })
  return schema.validate(data)
}

export { singinValidation, singupValidation }