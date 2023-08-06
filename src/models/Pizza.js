// Pizza.js

class Pizza {
  constructor(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }

  // Métodos getter para obtener los detalles de la pizza
  getSize() {
    return this.size;
  }

  getCrust() {
    return this.crust;
  }

  getToppings() {
    return this.toppings;
  }
}

module.exports = Pizza;
