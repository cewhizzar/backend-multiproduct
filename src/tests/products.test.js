const assert = require("assert");
const request = require("supertest");
const app = require("../../index");
const { sequelize } = require("../../src/models"); 

// Test para crear un nuevo producto (201 Created)
describe("POST api/products - Crear nuevo producto", () => {
    it("Debe retornar estado 201 y el producto creado", done => {
        sequelize.sync({ force: true }).then(() => {
          request(app)
            .post("/api/products")
            .timeout(20000)
            .send({
              "nombre": "ASUS 5000",
              "descripcion": "Laptop simple.",
              "precio": 1,
              "cantidad": 6,
              "categoria": "Electrónica",
              "imagen_url": "https://example.com/images/laptop-x2000.jpg"
            })
            .end((error, response) => {
              console.log(response.body);
              console.log(error);
              assert(response.status === 201);
              done();
            });
        }).catch(err => {
          console.log("Error al sincronizar la base de datos:", err);
          done(err);
        });
      });
  it("Debe retornar estado 201 y el producto creado (segundo)", done => {

    request(app)
      .post("/api/products")
      .timeout(20000)
      .send({
        "nombre": "Macbook Pro",
        "descripcion": "Laptop potente.",
        "precio": 100,
        "cantidad": 4,
        "categoria": "Electrónica",
        "imagen_url": "https://images/laptop-x2000.jpg"
      })
      .end((error, response) => {
        console.log(response.body);
        console.log(error);
        assert(response.status === 201);
        done();
      });
  });

  it("Debe retornar estado 400 si ya existe el producto", done => {

    request(app)
      .post("/api/products")
      .timeout(20000)
      .send({
        "nombre": "Macbook Pro",
        "descripcion": "Laptop potente.",
        "precio": 100,
        "cantidad": 4,
        "categoria": "Electrónica",
        "imagen_url": "https://images/laptop-x2000.jpg"
      })
      .end((error, response) => {
        console.log(response.body);
        console.log(error);
        assert(response.status === 400);
        done();
      });
  });
});

describe("!!!!!!! Test de Catálogo (Productos) !!!!!!!!!!!!!!", () => {
  // Test para obtener todos los productos (200 OK)
  describe("GET api/products - Obtener todos los productos", () => {
    it("Debe retornar estado 200 y la lista de productos", done => {
      request(app)
        .get("/api/products")
        .timeout(20000)
        .end((error, response) => {
          console.log(response.body);
          console.log(error);
          assert(response.status === 200);
          done();
        });
    });
  });

//Test para obtener un producto por ID (200 OK)
  describe('GET api/products/:id - Obtener producto por ID', () => {
    it('Debe retornar estado 200 y el producto', done => {
      const productId = "1";
      request(app)
        .get(`/api/products/${productId}`)
        .timeout(20000)
        .end((error, response) => {
          console.log(response.body);
          console.log(error);
          assert(response.status === 200);
          done();
        });
    });

    it('Debe retornar estado 404 cuando no se encuentra el producto', done => {
      const productId = "999";
      request(app)
        .get(`/api/products/${productId}`)
        .timeout(20000)
        .end((error, response) => {
          console.log(response.body);
          console.log(error);
          assert(response.status === 404);
          done();
        });
    });
  });

  // Test para actualizar un producto (200 OK)
  describe('PUT api/products/:id - Actualizar producto', () => {
    it('Debe retornar estado 200 y el producto actualizado', done => {
      const productId = "1";
      const updatedProduct = {
        "nombre": "Producto actualizado",
        "descripcion": "Descripción actualizada",
        "precio": 120.00,
        "cantidad": 15,
        "categoria": "Categoría actualizada",
        "imagen_url": "http://url-com"
      };

      request(app)
        .put(`/api/products/${productId}`)
        .timeout(20000)
        .send(updatedProduct)
        .end((error, response) => {
          console.log(response.body);
          console.log(error);
          assert(response.status === 200);
          done();
        });
    });

    it('Debe retornar estado 404 si el producto no existe', done => {
      const productId = "999";
      const updatedProduct = {
        "nombre": "Producto actualizado",
        "descripcion": "Descripción actualizada",
        "precio": 120.00,
        "cantidad": 15,
        "categoria": "Categoría actualizada",
        "imagen_url": "http://url-imagen.com/imagen_actualizada.jpg"
      };

      request(app)
        .put(`/api/products/${productId}`)
        .timeout(20000)
        .send(updatedProduct)
        .end((error, response) => {
          console.log(response.body);
          console.log(error);
          assert(response.status === 404);
          done();
        });
    });
  });

  // Test para eliminar un producto
  describe('DELETE api/products/:id - Eliminar producto', () => {
    it('Debe retornar estado 204 cuando el producto es eliminado correctamente', done => {
      const productId = "1";
      request(app)
        .delete(`/api/products/${productId}`)
        .timeout(20000)
        .end((error, response) => {
          console.log(response.body);
          console.log(error);
          assert(response.status === 200);
          done();
        });
    });

    it('Debe retornar estado 404 si el producto no existe', done => {
      const productId = "999";
      request(app)
        .delete(`/api/products/${productId}`)
        .timeout(20000)
        .end((error, response) => {
          console.log(response.body);
          console.log(error);
          assert(response.status === 404);
          done();
        });
    });
  });
});
