import { Mongoose } from "../index.js"

const cardSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 50
  },
  description: {
    type: String,
    required: true,
    max: 500
  },
  list: {
    type: String,
    required: true
  },
  assign: {
    type: String,
    required: false
  }
}, { collection: 'cards' }
)

export default cardSchema