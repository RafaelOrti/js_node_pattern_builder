// Burger.js

class Burger {
  constructor(size, cheese, bacon, lettuce, tomato, pickles) {
    this.size = size;
    this.cheese = cheese;
    this.bacon = bacon;
    this.lettuce = lettuce;
    this.tomato = tomato;
    this.pickles = pickles;
  }

  // Métodos getter para obtener los ingredientes
  getSize() {
    return this.size;
  }

  hasCheese() {
    return this.cheese;
  }

  hasBacon() {
    return this.bacon;
  }

  hasLettuce() {
    return this.lettuce;
  }

  hasTomato() {
    return this.tomato;
  }

  hasPickles() {
    return this.pickles;
  }
}

module.exports = Burger;
