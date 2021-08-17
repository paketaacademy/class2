import app from "./configs/app.js"
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Mongoose, UserSchema } from './configs/mongo.js'
import { LoginValidation } from './configs/users-validation.js'

dotenv.config()

app.post('/login', async (req, res) => {
  const { error } = LoginValidation(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }
 
  const{ email, password } = req.body
  const userModel = Mongoose.model('users', UserSchema, 'users')

  const user = await userModel.findOne({ email })
  if(!user){
    return res
    .status(400).send('E-mail não encontrado')
  }

  const validPass = await bcrypt.compare(password, user.password)

  if(!validPass){
    return res.status(400).send('Senha inválida')
  }

  const token = jwt.sign({_id: user._id}, process.env.SECRET, { 

    expiresIn: 10000

})
  res.header('auth-superman', token)
  res.send('Logou')
})

export default app