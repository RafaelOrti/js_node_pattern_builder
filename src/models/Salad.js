// Salad.js

class Salad {
  constructor(size, ingredients) {
    this.size = size;
    this.ingredients = ingredients;
  }

  // Métodos getter para obtener los detalles de la ensalada
  getSize() {
    return this.size;
  }

  getIngredients() {
    return this.ingredients;
  }
}

module.exports = Salad;
