const productService = require('../services/productService');

// Obtener todos los productos
async function getAllProducts(req, res, next) {
  try {
    const result = await productService.getAllProducts();
    return res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener los productos' });
  }
}

// Obtener un producto por ID
async function getProductById(req, res, next) {
  const { id } = req.params;
  try {
    const result = await productService.getProductById(id);
    return res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener el producto' });
  }
}

// Crear un nuevo producto
async function createProduct(req, res, next) {
  const { nombre, descripcion, precio, cantidad, categoria, imagen_url } = req.body;
  try {
    const result = await productService.createProduct({ nombre, descripcion, precio, cantidad, categoria, imagen_url });
    return res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear el producto' });
  }
}

// Actualizar un producto
async function updateProduct(req, res, next) {
  const { id } = req.params;
  const { nombre, descripcion, precio, cantidad, categoria, imagen_url } = req.body;
  try {
    const result = await productService.updateProduct(id, { nombre, descripcion, precio, cantidad, categoria, imagen_url });
    return res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar el producto' });
  }
}

// Eliminar un producto
async function deleteProduct(req, res, next) {
  const { id } = req.params;
  try {
    const result = await productService.deleteProduct(id);
    return res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar el producto' });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
