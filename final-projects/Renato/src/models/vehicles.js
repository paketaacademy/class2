import { Mongoose } from "../index.js"

const vehicleSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: false
  },
  length: {
    type: String,
    required: false
  },
  width: {
    type: String,
    required: false
  },
  height: {
    type: String,
    required: false
  },
  crew: {
    type: String,
    required: false
  },
  armor: {
    type: String,
    required: false
  },
  armament: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { collection: 'vehicle' }
)

export default vehicleSchema