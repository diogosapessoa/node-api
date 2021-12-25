import guid from 'guid'

import orderRepository from "../repositories/order-repository.js";

async function post(req, res) {
  try {
    const data = req.body
    data.number = guid.raw().substring(0, 6)
    const order = await orderRepository.save(data)
    res.status(201).send(order)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

async function getAll(req, res) {
  try {
    const orders = await orderRepository.getAll()
    res.status(200).send(orders)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

const orderController = {
  post,
  getAll,
}

export default orderController
