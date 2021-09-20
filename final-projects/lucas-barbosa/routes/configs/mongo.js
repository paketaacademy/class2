import mongoose from 'mongoose'

const { MONGODB } = process.env

mongoose.connect(MONGODB)

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required:true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
}, { collection: 'users' })

const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  netSalary: {
    type: String,
    required: true
  },
  grossSalary: {
    type: String,
    required: true
  },
  CPF: {
    type: String,
    required: true
  },
  CNPJ: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  naturalness: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hiredAt: {
    type: String,
    required: true
  },
  jobRole: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required:true,
    minlength: 5
  }
}, { collection: 'employees' })

export { mongoose as Mongoose, usersSchema, employeesSchema }