import Order from '../models/order-model.js'

async function save(order) {
  const newOrder = new Order(order)
  return await newOrder.save()
}

async function getAll() {
  return await Order.find({})
    .populate('customer')
    .populate('items.product')
}

const orderRepository = {
  save,
  getAll,
}

export default orderRepository
