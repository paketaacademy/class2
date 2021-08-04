import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const params = {
  'useNewUrlParser': true,
  'useUnifiedTopology': true
}

const { MONGO_URI } = process.env
mongoose.connect(MONGO_URI, params);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
}, { collection: 'users' }
);

export { mongoose as Mongoose, userSchema as userSchema }

