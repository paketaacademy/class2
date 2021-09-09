import { Mongoose } from "../../index.js"

const WeaponSchema = Mongoose.Schema({
  weapon:{
    type: String,
    required: true
  },
  weaponCharacteristics:{
    type: Object,
    require: true
  },
  owner:{
    type: String,
    required: true
  }
}, { collection: 'weapon' })

export default WeaponSchema