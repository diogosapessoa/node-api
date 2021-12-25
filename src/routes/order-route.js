import express from 'express'

import orderController from '../controllers/order-controller.js'

const orderRoute = express.Router()

orderRoute.post('/', orderController.post)
orderRoute.get('/', orderController.getAll)

export default orderRoute
