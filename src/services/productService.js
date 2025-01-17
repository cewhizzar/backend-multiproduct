const { Product } = require('../models');

// Verificar si el producto ya existe por el campo del nombre
async function productSearch(body) {
  let product = await Product.findOne({
    where: {
      nombre: body.nombre,
    },
    attributes: ["nombre"],
  });

  if (product) {
    return {
      message: `El producto ${body.nombre} ya existe`,
      status: 400,
    };
  }

  return null;
}

// Crear un nuevo producto
async function createProduct(body) {
  try {
    let exist = await productSearch(body);
    if (exist) {
      return exist;
    }

    const newProduct = await Product.create(body);
    
    return {
      message: "Producto creado exitosamente",
      status: 201,
      data: newProduct,
    };
  } catch (error) {
    return {
      message: "Algo salió mal al crear el producto",
      status: 500,
    };
  }
}

// Obtener todos los productos
async function getAllProducts() {
  try {
    let products = await Product.findAll();

    if (products.length === 0) {
      return {
        data: "No hay productos disponibles",
        status: 204,
      };
    }

    return {
      data: products,
      status: 200,
    };
  } catch (error) {
    return {
      message: "Algo salió mal al obtener los productos",
      status: 500,
    };
  }
}

// Obtener un producto por ID
async function getProductById(id) {
  try {
    let product = await Product.findByPk(id);

    if (!product) {
      return {
        data: "Producto no encontrado",
        status: 404,
      };
    }

    return {
      data: product,
      status: 200,
    };
  } catch (error) {
    return {
      message: "Algo salió mal al obtener el producto",
      status: 500,
    };
  }
}

// Actualizar un producto existente
async function updateProduct(id, productData) {
  try {

    let product = await Product.findByPk(id);

    if (!product) {
      return {
        data: "Producto no encontrado",
        status: 404,
      };
    }

    Object.assign(product, productData);
    await product.save();

    return {
      data: "Producto actualizado exitosamente",
      status: 200,
    };
  } catch (error) {
    return {
      message: "Algo salió mal al actualizar el producto",
      status: 500,
    };
  }
}

// Eliminar un producto
async function deleteProduct(id) {
  try {
    let product = await Product.findByPk(id);

    if (!product) {
      return {
        data: "Producto no encontrado",
        status: 404,
      };
    }

    await product.destroy();

    return {
      data: "Producto eliminado exitosamente",
      status: 200,
    };
  } catch (error) {
    return {
      message: "Algo salió mal al eliminar el producto",
      status: 500,
    };
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
