import app from "./configs/app.js"
import { Mongoose,UsersSchema} from './configs/mongo.js'
import validationToken from './configs/validationToken.js'

app.get('/profile', validationToken, async (req, res) => {
  
  const idUser = req.user._id
  const Users = Mongoose.model('users', UsersSchema, 'users')

  try{

    const foundUser = await Users.findOne({ _id: idUser})

    if(foundUser){
      return res.status(200).send(foundUser)

    }

    return res.status(404).send('Usuário não encontrado')

  } catch (err) {
    return res.send(err)
  }  
})

export default app