import express from 'express'

import customerController from '../controllers/customer-controller.js'
import { authorize } from '../services/auth-service.js'

const customerRoute = express.Router()

customerRoute.post('/authenticate', customerController.authenticate)
customerRoute.post('/refresh-token', authorize, customerController.refreshToken)
customerRoute.post('/', customerController.post)

export default customerRoute
