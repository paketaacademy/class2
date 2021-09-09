import { Mongoose } from "../../index.js"
import userSchema from "../../models/user/user-schema.js"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const Login ={
  async UserLogin(req, res){
    const { email, password } = req.body
    const SECRET = "GoodSaveTheQueen"
    const User = Mongoose.model('users', userSchema, 'users')

    try{
      const user = await User.findOne({ email: email })
      if(!user){
        return res
        .status(404)
        .send({
          message:'Sorry, email not found'
        })
      }
      const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
          return res
          .status(400)
          .send({
            message: "Wrong e-mail our password"
          })
        }
      const token = jwt.sign({ _id: user._id }, SECRET, {
          expiresIn: 2592000
        })
      
      res
      .set('auth-token', token)
      res
      .status(200)
      .send({
        message: 'Login successfully'
      })

    }catch(error){
      console.log(error)
      return (res
      .status(400)
      .send({
        message:'Sorry, something goes wrong'
      })
      )
    }
  }
}
export default Login