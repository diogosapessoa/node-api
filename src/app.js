import express from 'express'
import mongoose from 'mongoose'

import indexRoute from './routes/index.js'
import productRoute from './routes/product-route.js'
import customerRoute from './routes/customer-route.js'
import orderRoute from './routes/order-route.js'

mongoose.connect(process.env.MONGO_CONNECTION)

const app = express()
app.use(express.json({
  limit: '5mb'
}))
app.use(express.urlencoded({ extended: true }))

//CORS
function corsMiddleware(_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
}
app.use(corsMiddleware)

app.use(indexRoute)
app.use('/products', productRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)

export default app
