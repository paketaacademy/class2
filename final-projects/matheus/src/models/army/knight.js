import { Mongoose } from '../../index.js'

const KnightSchema = Mongoose.Schema({
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
  quantity:{
    type: String,
    required: true
  },
  weapon:{
    type: Array,
    required: true
  },
  armor:{
    type: Array,
    required: true
  },
  equipaments:{
    type: Array,
    required: false
  }, 
  mount:{
    type: String,
    required: true
  },
  mountEquipaments:{
    type: Object,
    required: false
  }
}, { collection: 'knight' })

export default KnightSchema