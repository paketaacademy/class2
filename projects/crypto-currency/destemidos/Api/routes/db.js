// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const params = {
  'useNewUrlParser': true,
  'useUnifiedTopology': true
}

mongoose.connect('mongodb+srv://academy:paketaacademy@cluster0.4zf3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', params);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    carteira: Object
}, { collection: 'users' }
);

export { mongoose as Mongoose, userSchema as UserSchema }

