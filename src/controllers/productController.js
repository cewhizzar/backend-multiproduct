const productService = require('../services/productService');

// Obtener todos los productos
async function getAllProducts(req, res, next) {
    const result = await productService.getAllProducts();
    return res.status(result.status).json(result);
}

// Obtener un producto por ID
async function getProductById(req, res, next) {
  const { id } = req.params;
    const result = await productService.getProductById(id);
    return res.status(result.status).json(result);
}

// Crear un nuevo producto
async function createProduct(req, res, next) {
  const { nombre, descripcion, precio, cantidad, categoria, imagen_url } = req.body;
    const result = await productService.createProduct({ nombre, descripcion, precio, cantidad, categoria, imagen_url });
    return res.status(result.status).json(result);
}

// Actualizar un producto
async function updateProduct(req, res, next) {
  const { id } = req.params;
  const { nombre, descripcion, precio, cantidad, categoria, imagen_url } = req.body;
    const result = await productService.updateProduct(id, { nombre, descripcion, precio, cantidad, categoria, imagen_url });
    return res.status(result.status).json(result);
}

// Eliminar un producto
async function deleteProduct(req, res, next) {
  const { id } = req.params;
    const result = await productService.deleteProduct(id);
    return res.status(result.status).json(result);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
