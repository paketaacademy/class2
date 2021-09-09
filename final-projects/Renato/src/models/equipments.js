import { Mongoose } from "../index.js"

const equipmentSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { collection: 'equipments' }
)

export default equipmentSchema