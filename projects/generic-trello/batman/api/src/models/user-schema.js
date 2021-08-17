import { Mongoose } from "../index.js"

const userSchema = new Mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        min: 3
    },
    lastName:{
        type: String,
        require: true,
        min: 3
    },
    email: {
      type: String,
      required: true,
      min: 9
    },
    password: {
      type: String,
      required: true,
      min: 6
    },
    date: {
      type: Date,
      default: Date.now
  }
  }, { collection: 'users' }
)

export default userSchema