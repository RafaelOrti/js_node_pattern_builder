// UserService.js

class UserService {
  constructor() {
    this.users = [];
  }

  // Método para registrar un nuevo usuario
  registerUser(username, email, password) {
    const newUser = {
      id: this.users.length + 1,
      username,
      email,
      password,
    };
    this.users.push(newUser);
    return newUser;
  }

  // Método para buscar un usuario por su ID
  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }

  // Método para buscar un usuario por su nombre de usuario
  getUserByUsername(username) {
    return this.users.find(user => user.username === username);
  }

  // Método para buscar un usuario por su correo electrónico
  getUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  // Método para verificar las credenciales de inicio de sesión
  login(username, password) {
    const user = this.getUserByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  // Método para eliminar un usuario por su ID
  deleteUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}

module.exports = UserService;
