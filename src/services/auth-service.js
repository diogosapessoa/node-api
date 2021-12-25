import jwt from 'jsonwebtoken'

function generateToken(data) {
  return jwt.sign(data, process.env.JWT_KEY, { expiresIn: '1d' })
}

function decodeToken(token) {
  return jwt.verify(token, process.env.JWT_KEY)
}

function authorize(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.statatus(401).send({ message: 'access denied' })
  }

  try {
    decodeToken(token)
    next()
  } catch (e) {
    res.status(401).send({ message: e.message })
  }
}

export { generateToken, decodeToken, authorize }
