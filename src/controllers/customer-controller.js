import md5 from 'md5'

import customerRepository from "../repositories/customer-repository.js";
import { generateToken, decodeToken } from '../services/auth-service.js'

async function post(req, res) {
  try {
    const data = req.body
    //FIXME: add salt
    data.password = md5(req.body.password)
    const customer = await customerRepository.save(data)
    res.status(201).send(customer)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

async function authenticate(req, res) {
  try {
    const customer = await customerRepository.get(req.body)
    if (!customer) {
      res.status(401).send({ message: 'invalid credentials' })
      return
    }

    const data = {
      id: customer._id,
      email: customer.email,
      name: customer.name,
    }
    const token = generateToken(data)
    res.status(200).send({ token })
  } catch (e) {
    res.status(400).send(e.message)
  }
}

async function refreshToken(req, res) {
  try {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    const decoded = decodeToken(token)
    const { id, email, name } = decoded

    const customer = await customerRepository.getById(id)
    if (!customer) {
      res.status(401).send('token not generated')
      return;
    }

    const newToken = generateToken({ id, email, name })
    res.status(200).send({ token: newToken })
  } catch (e) {
    res.status(400).send(e.message)
  }
}

const customerController = {
  post,
  authenticate,
  refreshToken,
}

export default customerController
