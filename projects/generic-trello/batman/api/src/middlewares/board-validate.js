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
          menssagem: `Ocorreu um erro - ${error}.`
        })
    }
  }
}