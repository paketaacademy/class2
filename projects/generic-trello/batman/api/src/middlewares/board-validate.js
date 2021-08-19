export const validateBoard = (schema) => {
  return async (req, res, next) => {
    try {
      const validateBody = await schema.validate(req.body)
      req.body = validateBody
    } catch (error) {
      return res
        .status(400)
        .send({
          menssagem: `Ocorreu um erro ${error}.`
        })
    }
  }
}