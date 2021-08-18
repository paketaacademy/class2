import userSchema from "../../models/user-schema.js"
import { Mongoose } from "../../index.js"
import bcrypt from 'bcrypt'
import { registerValidation } from '../../config/validation.js'

const UserRegister ={

  async creatUser(req, res) {
    const { error } = registerValidation(req.body)
    if(error){
      return res
      .status(400)
      .send(error.details[0].message)
    }

    const { firstName, lastName, email } = req.body

    const salt = await bcrypt.genSalt(10)
    const cryptograf = await bcrypt.hash(req.body.password, salt)
    const password = cryptograf

    const Users = Mongoose.model('users', userSchema, 'users')

    try {
      const foundUser = await Users.findOne({ email: email })
      if(foundUser) {
        return res
        .status(409)
        .send({
          messagem: 'E-mail já cadastrado!'
        })
      }
        const user = new Users({ firstName, lastName, email, password: password })
        await user.save()
  
        res
        .status(201)
        .send({
          messagem: 'Cadastro realizado com sucesso!'
        })
    } catch (error) {
       return res
       .status(400)
       .send({
         messagem: `Ocorreu um erro ${error}.`
       })
    }
  }
}
  
export default UserRegister