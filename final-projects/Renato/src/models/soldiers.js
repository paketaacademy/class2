import { Mongoose } from "../index.js"

const soldierSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  cpf: {
    type: Number,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  militarRank: {
    type: String,
    required: true
  }
}, { collection: 'soldiers' }
)

export default soldierSchema