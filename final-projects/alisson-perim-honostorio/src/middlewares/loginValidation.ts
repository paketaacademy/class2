import { NextFunction, Request, Response } from "express"

export const loginValidation = (schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
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