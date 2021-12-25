import express from 'express'

const indexRoute = express.Router()

indexRoute.get('/', (_req, res) => {
  res.status(200).send({
    title: 'Node API',
    version: '1.0.0',
    time: (new Date()).toISOString(),
  })
})

export default indexRoute
