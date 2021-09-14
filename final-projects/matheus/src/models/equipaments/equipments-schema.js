import { Mongoose } from '../../index.js'

const EquipamentsSchema = Mongoose.Schema({
  equipaments:{
    type: String,
    required: true
  },
  description:{
    type: Object,
    required: true
  },
  owner:{
    type: String,
    required: true
  }
}, { collection: 'equipaments' })
export default EquipamentsSchema