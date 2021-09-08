import bcrypt from "bcrypt"
import { userModel } from "../../infra/schemas/userSchema"
import { walletModel } from "../../infra/schemas/walletSchema"
import { IUser } from "../../interface/IUser"


export const createUser = {
  async create(req, res) {
    const user = req.body as IUser
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

    try {
      const findUser = await userModel.findOne({ email: user.email })
      if (findUser) {
        return res
          .status(422)
          .send({ message: `This email is already in use.` })
      }
      const newUser = await new userModel({ firstName: user.firstName, lastName: user.lastName, email: user.email, password: hashPassword }).save()
      const newWallet = await new walletModel({ userId: newUser._id, balance: 0 }).save()

      return res
        .status(201)
        .send({ message: `User registered with success` })

    } catch (error) {
      throw new Error(`Error - ${error}`)
    }
  }
}