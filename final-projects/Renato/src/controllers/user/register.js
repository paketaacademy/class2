import userSchema from "../../models/users.js"
import { Mongoose } from "../../index.js"
import bcrypt from 'bcrypt'

const userRegister = {
  async creatUser(req, res) {

    const { userName, cpf } = req.body

    const salt = await bcrypt.genSalt(10)
    const cryptograf = await bcrypt.hash(req.body.password, salt)
    const password = cryptograf
    const Users = Mongoose.model('users', userSchema)

    try {
      const foundUser = await Users.findOne({ cpf })
      if (foundUser) {
        return res
          .status(409)
          .send({
            message: 'Existing user.'
          })
      }
      const user = new Users({ userName, cpf, password: password })
      await user.save()
      res
      .status(201)
      .send({
        message: 'Registration performed successfully.'
      })

    } catch (error) {
      return res 
      .status(400)
      .send({
        message: `An error has occurred ${error}.` 
      })
    }
  }
}

export default userRegister