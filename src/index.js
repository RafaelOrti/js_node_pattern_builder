// index.js

// Importar módulos y dependencias
const express = require('express');
const config = require('./config');
const database = require('./database');
const UserService = require('./services/UserService');
const logger = require('./logger');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar middlewares y rutas
// ...

// Iniciar la conexión con la base de datos
database.connect();

// Iniciar el servidor
const port = config.server.port || 3000;
app.listen(port, () => {
  logger.log(`Servidor iniciado en el puerto ${port}`);
});
