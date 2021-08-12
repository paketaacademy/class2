import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const params = {
  'useNewUrlParser': true,
  'useUnifiedTopology': true
}
const { MONGO_URI } = process.env
mongoose.connect(MONGO_URI, params, () => console.log ('Connect to dataBase'))

const userSchema = new mongoose.Schema({
  firstName: {
      type: String,
      required: true,
      min: 6
  },
  lastName: {
      type: String,
      required: true,
      min: 6
  },
  email: {
      type: String,
      required: true,
      max: 256,
      min: 6
  },
  password: {
      type: String,
      required: true,
      max: 1024,
      min: 6
  },
  date: {
      type: Date,
      default: Date.now
  }
}, { collection: 'users' }
)

const walletSchema = new mongoose.Schema({
    user: {
        type:String,
        required:true
    },
    coinInitials: {
        type: String,
        required: true
    },
    coinName: {
        type: String,
        required: true
    },
    coinPrice: {
        type: Number,
        required: true
    },
    coinQuantity: {
        type: Number,
        required: true
    }
    
}, { collection: 'wallet' }
)

const bankSchema = new mongoose.Schema({
    user: {
        type:String,
        required:true
    },
    balance: {
        type: Number,
        required: true
    }
}, { collection: 'bank' }
)

export { mongoose as Mongoose, userSchema, walletSchema, bankSchema }





