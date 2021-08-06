import mongoose from 'mongoose'

const params = {
  'useNewUrlParser': true,
  'useUnifiedTopology': true
}

const { MONGODB } = process.env

mongoose.connect(MONGODB, params);

const userSchema = new mongoose.Schema({
    email: String,
    password: String
  }, { collection: 'users' }
)

const walletSchema = new mongoose.Schema({
    id: String,
    balance: Number,
    cryptocurrencies: Array
  }, { collection: 'wallets' }
)

export { mongoose as Mongoose, userSchema as UserSchema, walletSchema as WalletSchema }