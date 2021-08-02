import mongoose from 'mongoose'

const params = {
  'useNewUrlParser': true,
  'useUnifiedTopology': true
}

mongoose.connect('mongodb+srv://Iluminados:VfJmqXxKvxHdqqBk@cluster0.ytefl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', params);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
}, { collection: 'users' }
);

export { mongoose as Mongoose, userSchema as userSchema }

