import mongoose from 'mongoose'

const params = {
  'useNewUrlParser': true,
  'useUnifiedTopology': true
}

const { MONGODB } = process.env

mongoose.connect(MONGODB, params)

const userSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
      min: 9
    },
    email: {
      type: String,
      required: true,
      min: 9
    },
    password: {
      type: String,
      required: true,
      min: 6
    },
    boards: {
      type: Array
    }
  }, { collection: 'users' }
)

export { mongoose as Mongoose, userSchema as UserSchema}