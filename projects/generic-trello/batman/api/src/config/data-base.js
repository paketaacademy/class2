import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const params = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
}

const { MONGO_URI } = process.env
mongoose.connect(MONGO_URI, params, () => console.log ('Connect to dataBase'))

export { mongoose as Mongoose }