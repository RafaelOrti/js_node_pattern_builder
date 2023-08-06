// MealDirector.test.js

const MealDirector = require('./MealDirector');
const BurgerBuilder = require('./BurgerBuilder');
const PizzaBuilder = require('./PizzaBuilder');
const SaladBuilder = require('./SaladBuilder');

describe('MealDirector', () => {
  it('should construct a custom burger meal', () => {
    const burgerBuilder = new BurgerBuilder();
    const mealDirector = new MealDirector(burgerBuilder);

    const customBurgerMeal = mealDirector.constructMeal('large', true, true, true, true, false);
    const customBurger = customBurgerMeal.getMeal();

    expect(customBurger.getSize()).toBe('large');
    expect(customBurger.hasCheese()).toBe(true);
    expect(customBurger.hasBacon()).toBe(true);
    expect(customBurger.hasLettuce()).toBe(true);
    expect(customBurger.hasTomato()).toBe(true);
    expect(customBurger.hasPickles()).toBe(false);
  });

  it('should construct a custom pizza meal', () => {
    const pizzaBuilder = new PizzaBuilder();
    const mealDirector = new MealDirector(pizzaBuilder);

    const customPizzaMeal = mealDirector.constructMeal('medium', 'thin', ['cheese', 'mushrooms', 'pepperoni']);
    const customPizza = customPizzaMeal.getMeal();

    expect(customPizza.getSize()).toBe('medium');
    expect(customPizza.getCrust()).toBe('thin');
    expect(customPizza.getToppings()).toEqual(['cheese', 'mushrooms', 'pepperoni']);
  });

  it('should construct a custom salad meal', () => {
    const saladBuilder = new SaladBuilder();
    const mealDirector = new MealDirector(saladBuilder);

    const customSaladMeal = mealDirector.constructMeal('small', ['lettuce', 'tomato', 'cucumber']);
    const customSalad = customSaladMeal.getMeal();

    expect(customSalad.getSize()).toBe('small');
    expect(customSalad.getIngredients()).toEqual(['lettuce', 'tomato', 'cucumber']);
  });
});
