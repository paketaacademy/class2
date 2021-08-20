export const validateBoard = (schema) => {
  return async (req, res, next) => {
    const owner = { owner: req.user._id }
    try {
      const validateBody = await schema.validate(req.body, owner)
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