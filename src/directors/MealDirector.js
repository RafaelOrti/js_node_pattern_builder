// MealDirector.js

class MealDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructMeal() {
    this.builder.setSize('medium');
    this.builder.addTopping('cheese');
    this.builder.addTopping('tomato');
    return this.builder.build();
  }
}

module.exports = MealDirector;
