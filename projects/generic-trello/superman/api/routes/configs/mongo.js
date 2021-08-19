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
  }
}, { collection: 'users' })

const boardsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 5
  },
  description: {
    type: String
  },
  members: {
    type: Array
  },
  idUser: {
    type: String
  }
}, { collection: 'boards' })

const listsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 5
  },
  idBoard: {
    type: String,
    required: true
  }
  }, { collection: 'lists' }
)

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 4
  },
  description: {
    type: String,
    required: false
  },
  members: {
    type: Array,
    required:false
  },
  idList: {
    type: String
  }
}, { collection: 'tasks' })

export { mongoose as Mongoose, usersSchema as UsersSchema, boardsSchema as BoardsSchema, listsSchema as ListsSchema, tasksSchema as TasksSchema,}