import { Mongoose } from "../../index.js"

const BattleSchema = Mongoose.Schema({
  battlePalce: {
    type: String,
    required: true
  },
  quantEnglandArcher: {
    type: String,
    required: false
  },
  quantEnglandVillager: {
    type: String,
    required: false
  },
  quantEnglandKnight: {
    type: String,
    required: false
  },
  quantEnglandSwordMaster: {
    type: String,
    required: false
  },
  totalEnglandArmy: {
    type: String,
    required: true
  },
  quantSiegeWeaponEngland:{
    type:String,
    required:false
  },
  quantFranceArcher: {
    type: String,
    required: false
  },
  quantFranceVillager:{
    type:String,
    required:false
  },
  quantFranceSwordMaster:{
    type:String,
    required:false
  },
  quantFranceKnight:{
    type:String,
    required:false
  },
  totalFranceArmy:{
    type:String,
    required:true
  },
  quantSiegeWeaponFrance:{
    type:String,
    required:false
  },
  owner:{
    type:String,
    required:true
  }
}, { collection: 'battleRegister' })

export default BattleSchema