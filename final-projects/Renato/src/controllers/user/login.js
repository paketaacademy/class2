import userSchema from "../../models/users.js"
import { Mongoose } from "../../index.js"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const userLogin = {

  async loginUser(req, res) {

    try {
      const { userName, cpf, password } = req.body
      const Users = Mongoose.model('users', userSchema)
      const user = await Users.findOne({ cpf, userName })
      if (!user) {
        return res
          .status(400)
          .send({
            message: 'userName or CPF not registered.'
          })
      }
      const validPass = await bcrypt.compare(password, user.password)
      if (!validPass) {
        return res
          .status(400)
          .send({
            message: 'Invalid password.'
          })
      }
      const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
        expiresIn: 864000
      })
      res
        .set('authorization', token)
      res
        .status(200)
        .send({
          message: 'Login successfully.'
        })
    } catch (error) {
      return res
        .status(500)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default userLogin
