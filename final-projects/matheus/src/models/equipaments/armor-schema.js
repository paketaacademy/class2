import { Mongoose } from "../../index.js"

const ArmorSchema = Mongoose.Schema({
  armor:{
    type: String,
    required: true
  },
  armorCharacteristics:{
    type: Object,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
}, { collection: 'armor' })
export default ArmorSchema