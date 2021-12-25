import mongoose from 'mongoose'

const definition = {
  number: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  items: [{
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    }
  }]
}

const options = {
  timestamps: true
}

const schema = new mongoose.Schema(definition, options)

const Order = mongoose.model('Order', schema)

export default Order
