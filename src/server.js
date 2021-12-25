//https://balta.io/player/assistir/5c334f86-e717-9a7d-1240-481b00000000

import http from 'http'
import dotenv from 'dotenv'

import app from './app.js'
import { getLocalAddress, normalizePort, onError } from './server-utils.js'

const localAddress = getLocalAddress() || '127.0.0.1'

if (process.env.NODE_ENV !== 'prod') {
  dotenv.config()
}

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const serverMessage = `Server running at: http://${localAddress}:${port}`
const server = http.createServer(app)
server.listen(port, () => console.log(serverMessage))
server.on('error', onError)
