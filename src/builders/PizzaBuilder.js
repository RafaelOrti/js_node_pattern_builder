// PizzaBuilder.js

class PizzaBuilder {
  constructor() {
    this.pizza = {
      size: 'medium',
      crust: 'regular',
      toppings: [],
    };
  }

  setSize(size) {
    this.pizza.size = size;
    return this;
  }

  setCrust(crust) {
    this.pizza.crust = crust;
    return this;
  }

  addTopping(topping) {
    this.pizza.toppings.push(topping);
    return this;
  }

  addToppings(toppings) {
    this.pizza.toppings.push(...toppings);
    return this;
  }

  build() {
    return this.pizza;
  }
}

module.exports = PizzaBuilder;
