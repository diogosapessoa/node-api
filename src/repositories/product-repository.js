import Product from '../models/product-model.js'

async function save(product) {
  const newProduct = new Product(product)
  return await newProduct.save()
}

async function getAll() {
  const projection = '_id title description slug price'
  return await Product.find({ active: true }, projection)
}

/**
 * 
 * @param {String} slug 
 * @returns {Promisse<Any[]>}
 */
async function getBySlug(slug) {
  const projection = '_id active title description price tags'
  return await Product.findOne({ slug: slug }, projection)
}

/**
 * 
 * @param {String} slug 
 * @param {Any} body 
 */
async function putBySlug(slug, body) {
  await Product.findOneAndUpdate({ slug: slug }, body, { new: true })
}

/**
 * 
 * @param {String} slug 
 */
async function deleteBySlug(slug) {
  await Product.findOneAndDelete({ slug: slug })
}

const productRepository = {
  save,
  getAll,
  getBySlug,
  putBySlug,
  deleteBySlug,
}

export default productRepository
