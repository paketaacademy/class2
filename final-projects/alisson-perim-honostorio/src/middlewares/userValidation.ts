export const userValidation = (schema) => {
  return async (req, res, next) => {
    try {
      const validate = await schema.validate(req.body)
      req.body = validate
      next()
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Some error has occured - ${error}` })
    }
  }
}