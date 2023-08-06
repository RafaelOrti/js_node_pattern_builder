// SaladBuilder.test.js

const SaladBuilder = require('./SaladBuilder');

describe('SaladBuilder', () => {
  let saladBuilder;

  beforeEach(() => {
    // Se crea una nueva instancia de SaladBuilder antes de cada prueba
    saladBuilder = new SaladBuilder();
  });

  it('should build a default salad with size and ingredients', () => {
    const salad = saladBuilder.build();
    expect(salad.getSize()).toBe('medium');
    expect(salad.getIngredients()).toEqual([]);
  });

  it('should build a custom salad with selected options', () => {
    const salad = saladBuilder.setSize('large')
      .addIngredient('lettuce')
      .addIngredient('tomato')
      .addIngredient('cucumber')
      .build();

    expect(salad.getSize()).toBe('large');
    expect(salad.getIngredients()).toEqual(['lettuce', 'tomato', 'cucumber']);
  });
});
