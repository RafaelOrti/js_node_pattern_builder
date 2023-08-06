// logger.js

class Logger {
  static log(message) {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
  }

  static error(message) {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
  }

  static warn(message) {
    console.warn(`[WARNING] ${new Date().toISOString()}: ${message}`);
  }

  // Puedes agregar más métodos según tus necesidades, como debug, etc.
}

module.exports = Logger;
