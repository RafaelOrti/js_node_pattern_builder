// validations.test.js

const validations = require('./validations');

describe('validations', () => {
  it('should validate a valid email address', () => {
    const validEmail = 'test@example.com';
    const isValid = validations.isValidEmail(validEmail);
    expect(isValid).toBe(true);
  });

  it('should invalidate an invalid email address', () => {
    const invalidEmail = 'testexample.com'; // Missing @ symbol
    const isValid = validations.isValidEmail(invalidEmail);
    expect(isValid).toBe(false);
  });

  it('should validate a non-empty string', () => {
    const nonEmptyString = 'Hello, world!';
    const isValid = validations.isNotEmptyString(nonEmptyString);
    expect(isValid).toBe(true);
  });

  it('should invalidate an empty string', () => {
    const emptyString = '';
    const isValid = validations.isNotEmptyString(emptyString);
    expect(isValid).toBe(false);
  });

  // Puedes agregar más pruebas según sea necesario para cubrir otros escenarios y casos de uso
});
