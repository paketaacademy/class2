import { Mongoose } from "../index.js"

const Board = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3
  },
  description: {
    type: String,
    min: 3
  },
  owner: {
    type: String,
    required: true
  },
  users: {
    type: Array
  }
},
  { collection: "board" }
)

export default Board