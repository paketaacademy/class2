import mongoose from 'mongoose'
// import bcrypt from "bcryptjs"

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

// userSchema.pre('save', async (next) =>{
//   const hash = await bcrypt.hash(this.password, 10) //o valor 10 é referente a quantidade de rounds para gerar a codificação da senha
//   password = hash
//   next()
// })

export { mongoose as Mongoose, userSchema as userSchema }

