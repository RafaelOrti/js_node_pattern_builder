// Importar las dependencias necesarias
const { connectToDatabase } = require('../src/database');
const { PizzaBuilder, BurgerBuilder, SaladBuilder } = require('../src/builders');

// Función para cargar datos iniciales en la base de datos
async function seed() {
  try {
    // Conectarse a la base de datos
    await connectToDatabase();

    // Crear objetos complejos usando los Builders
    const pizzaBuilder = new PizzaBuilder();
    const pizza = pizzaBuilder.setSize('large').addToppings(['cheese', 'pepperoni']).build();

    const burgerBuilder = new BurgerBuilder();
    const burger = burgerBuilder.setSize('medium').addCheese().addBacon().build();

    const saladBuilder = new SaladBuilder();
    const salad = saladBuilder.setSize('small').addIngredients(['lettuce', 'tomato', 'cucumber']).build();

    // Guardar los objetos en la base de datos usando los servicios apropiados
    // Aquí se asume que existe un ProductService para pizzas, un ProductService para hamburguesas y un ProductService para ensaladas.
    await ProductService.create(pizza);
    await ProductService.create(burger);
    await ProductService.create(salad);

    console.log('Datos iniciales cargados con éxito en la base de datos.');
    process.exit(0); // Finalizar el proceso con éxito
  } catch (error) {
    console.error('Error al cargar datos iniciales:', error);
    process.exit(1); // Finalizar el proceso con error
  }
}

seed();
