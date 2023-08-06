// ProductService.js

const Pizza = require('../models/Pizza');
const Burger = require('../models/Burger');
const Salad = require('../models/Salad');

class ProductService {
  constructor() {
    this.products = [];
  }

  // Método para agregar un nuevo producto al menú
  addProduct(product) {
    this.products.push(product);
  }

  // Método para obtener todos los productos del menú
  getAllProducts() {
    return this.products;
  }

  // Método para obtener un producto por ID
  getProductById(productId) {
    return this.products.find(product => product.id === productId);
  }

  // Método para eliminar un producto por ID
  deleteProduct(productId) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}

module.exports = ProductService;
