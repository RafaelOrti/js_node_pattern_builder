// Burger.test.js

const Burger = require('./Burger');

describe('Burger', () => {
  it('should create a basic burger with default settings', () => {
    const burger = new Burger();
    expect(burger.getSize()).toBe('medium');
    expect(burger.hasCheese()).toBe(false);
    expect(burger.hasBacon()).toBe(false);
    expect(burger.hasLettuce()).toBe(false);
    expect(burger.hasTomato()).toBe(false);
    expect(burger.hasPickles()).toBe(false);
  });

  it('should create a custom burger with selected options', () => {
    const burger = new Burger('large', true, true, true, true, false);
    expect(burger.getSize()).toBe('large');
    expect(burger.hasCheese()).toBe(true);
    expect(burger.hasBacon()).toBe(true);
    expect(burger.hasLettuce()).toBe(true);
    expect(burger.hasTomato()).toBe(true);
    expect(burger.hasPickles()).toBe(false);
  });

  // Puedes agregar más pruebas según sea necesario para cubrir otros escenarios y casos de uso
});
