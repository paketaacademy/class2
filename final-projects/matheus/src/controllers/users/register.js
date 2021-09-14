import userSchema from '../../models/user/user-schema.js'
import { Mongoose } from '../../index.js'
import bcrypt from 'bcrypt'

const Register = {
  async UserRegister(req, res){
    const { firstName, lastName, email } = req.body

    const salt = await bcrypt.genSalt(10)
    const crypted = await bcrypt.hash(req.body.password, salt)
    const password = crypted

    const User = Mongoose.model('users', userSchema, 'users')

    try{
      const foundUser = await User.findOne({ email: email })
      if(foundUser){
        return res
        .status(422)
        .send({
          message:'Sorry, this email is alredy registered'
        })
      }

      const user = new User({ firstName, lastName, email, password: password })
      await user.save()

      return res
      .status(201)
      .send({
        message:'User saved successfully'
      })

    }catch(error){
      return res
      .status(400)
      .send({
        message:"Sorry, can't create this user"
      })
    }
  }
}
export default Register