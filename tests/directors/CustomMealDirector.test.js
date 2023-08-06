// CustomMealDirector.test.js

const CustomMealDirector = require('./CustomMealDirector');
const BurgerBuilder = require('./BurgerBuilder');
const PizzaBuilder = require('./PizzaBuilder');
const SaladBuilder = require('./SaladBuilder');

describe('CustomMealDirector', () => {
  it('should create a custom burger', () => {
    const burgerBuilder = new BurgerBuilder();
    const customMealDirector = new CustomMealDirector(burgerBuilder);

    customMealDirector.constructMeal('large', true, true, true, true, false);
    const customBurger = burgerBuilder.build();

    expect(customBurger.getSize()).toBe('large');
    expect(customBurger.hasCheese()).toBe(true);
    expect(customBurger.hasBacon()).toBe(true);
    expect(customBurger.hasLettuce()).toBe(true);
    expect(customBurger.hasTomato()).toBe(true);
    expect(customBurger.hasPickles()).toBe(false);
  });

  it('should create a custom pizza', () => {
    const pizzaBuilder = new PizzaBuilder();
    const customMealDirector = new CustomMealDirector(pizzaBuilder);

    customMealDirector.constructMeal('medium', 'thin', ['cheese', 'mushrooms', 'pepperoni']);
    const customPizza = pizzaBuilder.build();

    expect(customPizza.getSize()).toBe('medium');
    expect(customPizza.getCrust()).toBe('thin');
    expect(customPizza.getToppings()).toEqual(['cheese', 'mushrooms', 'pepperoni']);
  });

  it('should create a custom salad', () => {
    const saladBuilder = new SaladBuilder();
    const customMealDirector = new CustomMealDirector(saladBuilder);

    customMealDirector.constructMeal('small', ['lettuce', 'tomato', 'cucumber']);
    const customSalad = saladBuilder.build();

    expect(customSalad.getSize()).toBe('small');
    expect(customSalad.getIngredients()).toEqual(['lettuce', 'tomato', 'cucumber']);
  });
});
