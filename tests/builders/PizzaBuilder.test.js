// PizzaBuilder.test.js

const PizzaBuilder = require('./PizzaBuilder');

describe('PizzaBuilder', () => {
  let pizzaBuilder;

  beforeEach(() => {
    // Se crea una nueva instancia de PizzaBuilder antes de cada prueba
    pizzaBuilder = new PizzaBuilder();
  });

  it('should build a default pizza with size and crust', () => {
    const pizza = pizzaBuilder.build();
    expect(pizza.getSize()).toBe('medium');
    expect(pizza.getCrust()).toBe('classic');
    expect(pizza.getToppings()).toEqual([]);
  });

  it('should build a custom pizza with selected options', () => {
    const pizza = pizzaBuilder.setSize('large')
      .setCrust('thin')
      .addTopping('cheese')
      .addTopping('mushrooms')
      .addTopping('pepperoni')
      .build();

    expect(pizza.getSize()).toBe('large');
    expect(pizza.getCrust()).toBe('thin');
    expect(pizza.getToppings()).toEqual(['cheese', 'mushrooms', 'pepperoni']);
  });
});
