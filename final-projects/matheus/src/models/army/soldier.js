import { Mongoose } from '../../index.js'

const SoldierSchema = Mongoose.Schema({
  typeSoldier:{
    type: String,
    required: true
  },
  ability:{
    type: Object,
    required: true
  },
  strength: {
    type: String,
    required: true
  },
  dexterity: {
    type: String,
    required: true
  },
  constitution: {
    type: String,
    required: true
  },
  intelligence: {
    type: String,
    required: true
  },
  wisdom: {
    type: String,
    required: true
  },
  lifePoints: {
    type: String,
    required: true
  },
  equipaments:{
    type: Array,
    required: false
  }, 
  mount:{
    type: String,
    required: false
  },
  owner:{
    type: String,
    required: true
  }
}, { collection: 'soldier' })
export default SoldierSchema