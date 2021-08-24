export const validateBoard = (schema) => {
  return async (req, res, next) => {
    const owner = req.user._id
    const { title, description } = req.body
    try {
      const validateBody = await schema.validate({ owner, title, description })
      req.body = validateBody
      next()
    } catch (error) {
      res
        .status(400)
        .send({
          message: `Ocorreu um erro - ${error}.`
        })
    }
  }
}

export const validateAssign = (schema) => {
  return async (req, res, next) => {
    const email = { email: req.params.email }
    try {
      const validateBody = await schema.validate(email)
      next()
    } catch (err) {
      res
        .status(404)
        .send({ message: `Erro ao tentar validar email - ${err}` })
    }
  }
}