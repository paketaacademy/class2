import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

interface IAuthToken {
  id: string,
  iat: number,
  exp: number
}

export function authMiddlewares(req: Request, res: Response, next: NextFunction) {
  dotenv.config()
  const { SECRET } = process.env

  try {
    const { authorization } = req.headers
    if (!authorization) {
      return res
        .status(401)
        .send({ message: "Access denied" })
    }
    const token = authorization.replace("Bearer", "").trim()
    const data = jwt.verify(token, SECRET)
    req.user = data as IAuthToken
    next()
  } catch (error) {
    throw new Error(`An error has occurred - ${error}`)
  }
}