import { Mongoose } from "../index.js"

const platoonSchema = new Mongoose.Schema({
  namePlatoon: {
    type: String,
    required: true,
  },
  platoonCommander: {
    type: String,
    required: true
  },
  soldiers: {
    type: Array,
    required: false
  }
}, { collection: 'platoons' }
)

export default platoonSchema