import app from "./configs/app.js"
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Mongoose, UserSchema } from './configs/db.js'

dotenv.config()

app.post('/singin', async (req, res) => {
 
  const{ email, password } = req.body
  const userModel = Mongoose.model('users', UserSchema, 'users')

  const Users = await userModel.findOne({ email })
  if(!Users){
    return res
    .status(400).send('email não encontrado')
  }

  const validPass = await bcrypt.compare(password, Users.password)
  if(!validPass){
    return res.status(400).send('Senha invalida')
  }

  const token = jwt.sign({_id: Users._id}, process.env.SECRET, { 
    expiresIn: 600
})
  res.header('auth-token', token)
  res.send('login feito com sucesso')

})

export default app