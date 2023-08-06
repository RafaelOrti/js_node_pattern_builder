// validations.js

class Validations {
  static isValidEmail(email) {
    // Validar el formato del correo electrónico usando expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidPassword(password) {
    // Verificar que la contraseña tenga al menos 6 caracteres
    return password.length >= 6;
  }

  static isValidName(name) {
    // Verificar que el nombre no esté vacío y contenga solo letras y espacios
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }

  // Puedes agregar más funciones de validación según tus necesidades
}

module.exports = Validations;
