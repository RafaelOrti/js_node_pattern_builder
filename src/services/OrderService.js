// OrderService.js

const Order = require('../models/Order');

class OrderService {
  constructor() {
    this.orders = [];
  }

  // Método para crear una nueva orden
  createOrder(customer, items) {
    const order = new Order(customer, items);
    this.orders.push(order);
    return order;
  }

  // Método para obtener todas las órdenes
  getAllOrders() {
    return this.orders;
  }

  // Método para obtener una orden por ID
  getOrderById(orderId) {
    return this.orders.find(order => order.id === orderId);
  }

  // Método para eliminar una orden por ID
  deleteOrder(orderId) {
    this.orders = this.orders.filter(order => order.id !== orderId);
  }
}

module.exports = OrderService;
