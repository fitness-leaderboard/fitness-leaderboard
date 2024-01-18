import { validateEmail } from "../../src/libraries/utils/emailValidation";

describe('validateEmail', () => {
  it('Should return true for a valid northeastern.edu email', () => {
    const validEmail = 'user@northeastern.edu';
    const isValid = validateEmail(validEmail);
    expect(isValid).toBe(true);
  });

  it('Should return false for an invalid email format', () => {
    const invalidEmail = 'invalid-email';
    const isValid = validateEmail(invalidEmail);
    expect(isValid).toBe(false);
  });

  it('Should return false for an email with a different domain', () => {
    const invalidDomainEmail = 'user@example.com';
    const isValid = validateEmail(invalidDomainEmail);
    expect(isValid).toBe(false);
  });
});
