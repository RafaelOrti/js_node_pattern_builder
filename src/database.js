// database.js

const mongoose = require('mongoose');
const config = require('./config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose.connect(
      `mongodb://${config.database.host}:${config.database.port}/${config.database.dbName}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log('Connected to the database!');
    })
    .catch(error => {
      console.error('Error connecting to the database:', error);
    });
  }

  // Puedes agregar más métodos para interactuar con la base de datos, como CRUD operations, etc.
}

module.exports = new Database();
