import { Mongoose } from "../index.js"

const landingSchema = new Mongoose.Schema({
  namePlatoon: {
    type: Array,
    required: true
  },
  nameVehicle: {
    type: Array,
    required: true
  },
  landingPlace: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: String,
    required: true
  }
}, { collection: 'landing' }
)

export default landingSchema