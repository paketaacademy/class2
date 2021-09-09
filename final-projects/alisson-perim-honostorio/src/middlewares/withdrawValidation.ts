import { Request, Response, NextFunction } from "express"

export const withdrawValidation = (schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validation = await schema.validate(req.body)
      req.body = validation
      next()
    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occured - ${error}` })
    }
  }
}