import productRepository from '../repositories/product-repository.js'

async function post(req, res) {
  try {
    const product = await productRepository.save(req.body)
    res.status(201).send(product)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

async function getAll(_req, res) {
  try {
    const products = await productRepository.getAll()
    res.status(200).send(products)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

async function getBySlug(req, res) {
  try {
    const product = await productRepository.getBySlug(req.params.slug)
    res.status(200).send(product)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

async function putBySlug(req, res) {
  try {
    const slug = req.params.slug
    await productRepository.putBySlug(slug, req.body)
    res.status(200).send(`${slug} updated`)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

async function deleteBySlug(req, res) {
  try {
    const slug = req.params.slug
    await productRepository.deleteBySlug(slug)
    res.status(200).send({ message: `${slug} deleted` })
  } catch (e) {
    res.status(400).send(e.message)
  }
}

const productController = {
  post,
  getAll,
  getBySlug,
  putBySlug,
  deleteBySlug,
}

export default productController
