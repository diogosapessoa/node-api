import mongoose from 'mongoose'

const definition = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}

const options = {
  timestamps: true
}

const schema = new mongoose.Schema(definition, options)

const Customer = mongoose.model('Customer', schema)

export default Customer
