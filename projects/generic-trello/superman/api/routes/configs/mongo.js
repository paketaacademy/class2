import mongoose from 'mongoose'

const params = {
  'useNewUrlParser': true,
  'useUnifiedTopology': true
}

const { MONGODB } = process.env

mongoose.connect(MONGODB, params)

const usersSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      min: 9
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
    boards: {
      type: Array
    }
  }, { collection: 'users' }
)

const boardsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 9
  },
  lists: {
    type: Array
  }
  }, { collection: 'boards' }
)

const listsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 9
  },
  tasks: {
    type: Array
  }
  }, { collection: 'lists' }
)

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 9
  },
  description: {
    type: String,
    required: false,
    min: 9
  },
  members: {
    type: Array,
    required:false
  }
  }, { collection: 'tasks' }
)

export { mongoose as Mongoose, usersSchema as UsersSchema, boardsSchema as BoardsSchema, listsSchema as ListsSchema, tasksSchema as TasksSchema,}