import { Mongoose } from "../index.js"

const userSchema = new Mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: 1
  },
  cpf: {
    type: Number,
    required: true,
    min: 11
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { collection: 'users' }
)

export default userSchema