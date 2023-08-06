// CustomMealDirector.js

class CustomMealDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructMeal() {
    this.builder.setSize('large');
    this.builder.setCrust('thin');
    this.builder.addTopping('cheese');
    this.builder.addTopping('tomato');
    this.builder.addTopping('mushrooms');
    this.builder.addTopping('olives');
    this.builder.addTopping('spinach');
    return this.builder.build();
  }
}

module.exports = CustomMealDirector;
