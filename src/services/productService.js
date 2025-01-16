const { Product } = require('../models');

// Obtener todos los Products
const getAllProducts = async () => {
  return await Product.findAll();
};

// Obtener un Product por ID
const getProductById = async (id) => {
  return await Product.findByPk(id);
};

// Crear un nuevo Product
const createProduct = async (productData) => {
  return await Product.create(productData);
};

// Actualizar un Product existente
const updateProduct = async (id, productData) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.update(productData);
  }
  return null;
};

// Eliminar un Product
const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (product) {
    await product.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
