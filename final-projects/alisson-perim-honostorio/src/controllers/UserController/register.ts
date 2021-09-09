import bcrypt from "bcrypt"
import { UserModel } from "../../infra/schemas/userSchema"
import { IWallet, walletModel } from "../../infra/schemas/walletSchema"
import { IUser } from "../../infra/schemas/userSchema"


export const createUser = {
  async create(req, res) {
    const { firstName, lastName, email, password } = req.body as IUser
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    try {
      const findUser = await UserModel.findOne({ email })
      if (findUser) {
        return res
          .status(422)
          .send({ message: `This email is already in use.` })
      }
      const newUser: IUser = await new UserModel({ firstName, lastName, email, password: hashPassword }).save()
      const newWallet: IWallet = await new walletModel({ userId: newUser._id, balance: 0 }).save()

      return res
        .status(201)
        .send({ message: `User registered with success` })

    } catch (error) {
      throw new Error(`Error - ${error}`)
    }
  }
}