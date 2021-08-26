import app from "./configs/app.js"
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Mongoose, UsersSchema } from './configs/mongo.js'

dotenv.config()

app.post('/login', async (req, res) => {
 
  const{ email, password } = req.body
  const userModel = Mongoose.model('users', UsersSchema, 'users')

  const user = await userModel.findOne({ email })
  if(!user){
    return res
    .status(400).send('E-mail ou senha inváildo!')
  }

  const validPass = await bcrypt.compare(password, user.password)

  if(!validPass){
    return res.status(400).send('E-mail ou senha inváildo!')
  }

  const token = jwt.sign({_id: user._id}, process.env.SECRET, { 

    expiresIn: 100000

})
  res.header('auth-superman', token)
  res.status(200).send('Login realizado com sucesso!')
})

export default app