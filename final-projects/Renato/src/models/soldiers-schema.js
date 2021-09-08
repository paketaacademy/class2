import { Mongoose } from '../index.js'

const soldiersSchema = new Mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2
  },
  lastName: {
    type: String,
    required: true,
    min: 2
  },
  bloodType: {
    type: String,
    required: true,
    min: 1
  },
  patent: {
    type: String,
    required: true,
    min: 3
  },
  password: {
    type: String,
    required: true
  },
  cpf: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { collection: 'soldiers' }
)

export default soldiersSchema



