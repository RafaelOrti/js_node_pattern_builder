// BurgerBuilder.js

class BurgerBuilder {
  constructor() {
    this.burger = {
      size: 'medium',
      cheese: false,
      bacon: false,
      lettuce: false,
      tomato: false,
      pickles: false,
    };
  }

  setSize(size) {
    this.burger.size = size;
    return this;
  }

  addCheese() {
    this.burger.cheese = true;
    return this;
  }

  addBacon() {
    this.burger.bacon = true;
    return this;
  }

  addLettuce() {
    this.burger.lettuce = true;
    return this;
  }

  addTomato() {
    this.burger.tomato = true;
    return this;
  }

  addPickles() {
    this.burger.pickles = true;
    return this;
  }

  build() {
    return this.burger;
  }
}

module.exports = BurgerBuilder;
