// Pizza.test.js

const Pizza = require('./Pizza');

describe('Pizza', () => {
  it('should create a pizza with default settings', () => {
    const pizza = new Pizza();
    expect(pizza.getSize()).toBe('medium');
    expect(pizza.getCrust()).toBe('classic');
    expect(pizza.getToppings()).toEqual([]);
  });

  it('should create a custom pizza with selected options', () => {
    const pizza = new Pizza('large', 'thin', ['cheese', 'mushrooms', 'pepperoni']);
    expect(pizza.getSize()).toBe('large');
    expect(pizza.getCrust()).toBe('thin');
    expect(pizza.getToppings()).toEqual(['cheese', 'mushrooms', 'pepperoni']);
  });

  // Puedes agregar más pruebas según sea necesario para cubrir otros escenarios y casos de uso
});
