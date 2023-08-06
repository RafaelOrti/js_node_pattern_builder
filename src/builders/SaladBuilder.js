// SaladBuilder.js

class SaladBuilder {
  constructor() {
    this.salad = {
      size: 'small',
      ingredients: [],
    };
  }

  setSize(size) {
    this.salad.size = size;
    return this;
  }

  addIngredient(ingredient) {
    this.salad.ingredients.push(ingredient);
    return this;
  }

  addIngredients(ingredients) {
    this.salad.ingredients.push(...ingredients);
    return this;
  }

  build() {
    return this.salad;
  }
}

module.exports = SaladBuilder;
