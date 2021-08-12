import express from 'express'
import bcrypt from 'bcryptjs'
import { registerValidation } from './validation.js'
import { Mongoose, userSchema } from './configs/data-base.js'
const app = express()

app.use(express.json())

app.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body)
  if (error) {
    return res
      .status(400)
      .send(error.details[0].message)
  }
  const { firstName, lastName, email } = req.body
  const usersModel = Mongoose.model('users', userSchema, 'users')

  const emailExist = await usersModel.findOne({ email })
  if(emailExist) {
    return res
        .status(400)
        .send({
          error:'Email already exists.'
        })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  try {
    const userSaved = await usersModel.create({ firstName, lastName, email, password:hashedPassword })
    res.send(userSaved)
  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
})

export default app