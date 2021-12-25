import os from 'os'

/**
 * Get local IP address
 * @returns {string|false} The IP if exists
 */
function getLocalAddress() {
  const netInterfaces = os.networkInterfaces()
  for (let keyInterface in netInterfaces) {
    const interfaces = netInterfaces[keyInterface]
    for (let i = 0; i < interfaces.length; i++) {
      const info = interfaces[i]
      if (info.internal === false && info.internal === false &&
        info.address.startsWith('192')) {
        return info.address
      }
    }
  }
  return false
}

/**
 * Get normalized port
 * @param {string} value numeral string port
 * @returns {string|number|false} The port if val is numeral string
 */
function normalizePort(value) {
  const port = parseInt(value, 10)
  if (isNaN(port)) {
    return value
  }
  if (port > 0) {
    return port
  }
  return false
}

/**
 * 
 * @param {Error} error object error to handle
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ?
    'Pipe ' + port : 'Port ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

export { getLocalAddress, normalizePort, onError }
