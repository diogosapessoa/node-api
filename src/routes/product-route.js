import express from 'express'

import productController from '../controllers/product-controller.js'
import { authorize } from '../services/auth-service.js'

const productRoute = express.Router()

productRoute.post('/', authorize, productController.post)
productRoute.get('/', productController.getAll)
productRoute.get('/:slug', productController.getBySlug)
productRoute.put('/:slug', productController.putBySlug)
productRoute.delete('/:slug', productController.deleteBySlug)

export default productRoute
