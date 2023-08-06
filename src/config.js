// config.js

const config = {
  // Configuración para la base de datos
  database: {
    host: 'localhost',
    port: 27017,
    dbName: 'my_app_db',
  },

  // Configuración para el servidor
  server: {
    port: 3000,
    // Puedes agregar más opciones de configuración para el servidor si es necesario
  },

  // Otras configuraciones de la aplicación
  // ...

  // Variables de entorno
  env: process.env.NODE_ENV || 'development',
  // Puedes agregar más variables de entorno si es necesario
};

module.exports = config;
