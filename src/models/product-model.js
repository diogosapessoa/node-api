import mongoose from 'mongoose'

const definition = {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  tags: [{
    type: String,
    required: true,
  }]
}

const options = {
  timestamps: true
}

const schema = new mongoose.Schema(definition, options)

const Product = mongoose.model('Product', schema)

export default Product
