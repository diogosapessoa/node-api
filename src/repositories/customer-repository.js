import md5 from 'md5'

import Customer from '../models/customer-model.js'

async function save(customer) {
  const newCostumer = new Customer(customer)
  const saved = await newCostumer.save()
  const { _id, createdAt, updatedAt } = saved
  return {
    _id, createdAt, updatedAt,
    ...customer,
  }
}

async function get(data) {
  const filter = {
    active: true,
    email: data.email,
    password: md5(data.password),
  }
  return await Customer.findOne(filter)
}

async function getById(id) {
  return Customer.findById(id)
}

const customerRepository = {
  save,
  get,
  getById,
}

export default customerRepository
