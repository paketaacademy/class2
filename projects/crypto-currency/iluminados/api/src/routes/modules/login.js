import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginValidation } from "./validation.js";
import { Mongoose, userSchema } from "./configs/data-base.js";
const app = express();

app.use(express.json());

app.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  const { error } = loginValidation(req.body)
  if (error) {
    return res
      .status(400)
      .send(error.details[0].message)
  }

  const { email } = req.body
  const usersModel = Mongoose.model('users', userSchema, 'users')
  const user = await usersModel.findOne({ email })
  if (!user) {
    return res
      .status(400)
      .send({
        emailError: 'Email is not found'
      })
  }

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) {
    return res
      .status(400)
      .send({
        passwordError: 'Invalid password'
      })
  }

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: 86400 })
  res.header('auth-token', token)
  res.send({
    msg: 'Logged in!'
  })
})

export default app