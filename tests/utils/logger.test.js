// logger.test.js

const logger = require('./logger');

describe('logger', () => {
  it('should log a message', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    const message = 'Hello, world!';
    logger.log(message);

    // Verificar que la función de registro (log) haya sido llamada con el mensaje correcto
    expect(logSpy).toHaveBeenCalledWith(message);

    // Restaurar la implementación original de la función de registro (log)
    logSpy.mockRestore();
  });

  it('should log an error message', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();

    const errorMessage = 'Error occurred!';
    logger.error(errorMessage);

    // Verificar que la función de registro de errores (error) haya sido llamada con el mensaje de error correcto
    expect(errorSpy).toHaveBeenCalledWith(errorMessage);

    // Restaurar la implementación original de la función de registro de errores (error)
    errorSpy.mockRestore();
  });

  // Puedes agregar más pruebas según sea necesario para cubrir otros escenarios y casos de uso
});
