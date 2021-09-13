import { Request, Response } from "express"
import { UserModel } from "../../infra/schemas/userSchema"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const userLogin = {
  async login(req: Request, res: Response) {
    const { SECRET } = process.env
    const { email, password } = req.body
    try {
      const user = await UserModel.findOne({ email })
      if (!user) {
        return res
          .status(422)
          .send({ message: `User not founded` })
      }

      const validatePassword = await bcrypt.compare(password, user.password)
      if (!validatePassword) {
        return res
          .status(422)
          .send({ message: `Password is wrong` })
      }

      const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: 10800 })

      const userLogged = {
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: `${user.email}`,
      }
      return res
        .status(202)
        .json({
          userLogged,
          token
        })
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Something goes wrong = ${error}` })
    }
  }
}