import mongoose from 'mongoose'

const params = {
  'useNewUrlParser': true,
  'useUnifiedTopology': true
}

const { MONGODB } = process.env

mongoose.connect(MONGODB, params)

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      min: 9
    },
    password: {
      type: String,
      required: true,
      min: 6
    }
  }, { collection: 'users' }
)

const walletSchema = new mongoose.Schema({
    idUser: String,
    balance: Number,
    cryptocurrencies: Array
  }, { collection: 'wallets' }
)

export { mongoose as Mongoose, userSchema as UserSchema, walletSchema as WalletSchema }