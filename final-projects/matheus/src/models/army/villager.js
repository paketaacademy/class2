import { Mongoose } from '../../index.js'

const VillagerSchema = Mongoose.Schema({
  name:{
    type: String,
    required: false
  },
  typeSoldier:{
    type: String,
    required: true
  },
  ability:{
    type: Object,
    required: false
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
  quantity:{
    type: String,
    required: true
  },
  weapon:{
    type: Array,
    required: false
  },
  armor:{
    type: Array,
    required: false
  },
  equipaments:{
    type: Array,
    required: false
  }, 
  mount:{
    type: String,
    required: false
  },
  mountEquipaments:{
    type: Object,
    required: false
  },
  owner:{
    type: String,
    required:true
  }
}, { collection: 'villager' })

export default VillagerSchema