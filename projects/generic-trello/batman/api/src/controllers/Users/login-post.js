import userSchema from "../../models/user-schema.js"
import { Mongoose } from "../../index.js"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import { loginValidation } from '../../config/validation.js'

dotenv.config()

const UserLogin = {

    async loginUser (req, res) {
        const { error } = loginValidation(req.body)
        if (error) {
          return res
          .status(400)
          .send(error.details[0].message)
        }
       
        const{ email, password } = req.body
        const userBd = Mongoose.model('users', userSchema, 'users')
      
        const user = await userBd.findOne({ email })
        if(!user){
          return res
          .status(400)
          .send({
              messagem:'email não encontrado'
            })
        }
      
        const validPass = await bcrypt.compare(password, user.password)
      
        if(!validPass){
          return res
          .status(400)
          .send({
              messagem:'Senha invalida'
            })
        }
      
        const token = jwt.sign({_id: user._id}, process.env.SECRET, { 
          expiresIn: 2592000
      })
        res.
        header('auth-token', token)
        res.
        send({
            messagem:'Login realizado com sucesso!'
        })
      }
}

export default UserLogin