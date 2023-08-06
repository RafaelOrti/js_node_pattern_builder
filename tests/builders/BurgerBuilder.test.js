// BurgerBuilder.test.js

const BurgerBuilder = require('./BurgerBuilder');

describe('BurgerBuilder', () => {
  let burgerBuilder;

  beforeEach(() => {
    // Se crea una nueva instancia de BurgerBuilder antes de cada prueba
    burgerBuilder = new BurgerBuilder();
  });

  it('should build a basic burger with default settings', () => {
    const burger = burgerBuilder.build();
    expect(burger.getSize()).toBe('medium');
    expect(burger.hasCheese()).toBe(false);
    expect(burger.hasBacon()).toBe(false);
    expect(burger.hasLettuce()).toBe(false);
    expect(burger.hasTomato()).toBe(false);
    expect(burger.hasPickles()).toBe(false);
  });

  it('should build a custom burger with selected options', () => {
    const burger = burgerBuilder.setSize('large')
      .addCheese()
      .addBacon()
      .addLettuce()
      .addTomato()
      .addPickles()
      .build();

    expect(burger.getSize()).toBe('large');
    expect(burger.hasCheese()).toBe(true);
    expect(burger.hasBacon()).toBe(true);
    expect(burger.hasLettuce()).toBe(true);
    expect(burger.hasTomato()).toBe(true);
    expect(burger.hasPickles()).toBe(true);
  });
});
