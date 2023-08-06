// Salad.test.js

const Salad = require('./Salad');

describe('Salad', () => {
  it('should create a salad with default settings', () => {
    const salad = new Salad();
    expect(salad.getSize()).toBe('medium');
    expect(salad.getIngredients()).toEqual([]);
  });

  it('should create a custom salad with selected options', () => {
    const salad = new Salad('small', ['lettuce', 'tomato', 'cucumber']);
    expect(salad.getSize()).toBe('small');
    expect(salad.getIngredients()).toEqual(['lettuce', 'tomato', 'cucumber']);
  });

  // Puedes agregar más pruebas según sea necesario para cubrir otros escenarios y casos de uso
});
