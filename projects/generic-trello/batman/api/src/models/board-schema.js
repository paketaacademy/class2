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
  users: {
    type: Array,
    required: true,
    min: 1
  }
},
  { collection: "board" }
)

export default Board