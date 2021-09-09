import { Mongoose } from "../../index.js"

const SiegeWeaponsSchema = Mongoose.Schema({
  siegeWeapon:{
    type: String,
    required: true
  },
  siegeWeaponCharacteristics:{
    type: Object,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
}, { collection: 'siege-weapon' })
export default SiegeWeaponsSchema