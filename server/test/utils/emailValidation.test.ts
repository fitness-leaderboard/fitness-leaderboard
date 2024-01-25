import { INVALID_EMAIL_DOMAIN, INVALID_EMAIL_FORMAT, INVALID_EMPTY_PARAMETER } from '../../src/libraries/errors/InvalidParametersError'
import { Athlete } from '../../src/libraries/model/Athlete';
import { Email } from '../../src/libraries/model/Email'

describe('Testing for Email', () => {
  it('Should be ok for a valid northeastern.edu email', () => {
    expect(() => Email.create('test@northeastern.edu')).not.toThrow()
    expect(() => Email.create('test@husky.neu.edu')).not.toThrow()
  })

  it('Should be ok for an email with different case', () => {
    expect(() => Email.create('Test@northeastern.edu')).not.toThrow()
    expect(() => Email.create('tEsT@Husky.Neu.Edu')).not.toThrow()
  })

  it('Should throw error for an email without NEU domain', () => {
    expect(() => Email.create('test@northeastern.com')).toThrow(INVALID_EMAIL_DOMAIN)
    expect(() => Email.create('test@husky.neu.com')).toThrow(INVALID_EMAIL_DOMAIN)
  })

  it('Should throw error for an invalid email format', () => {
    expect(() => Email.create('test@northeastern')).toThrow(INVALID_EMAIL_FORMAT)
  })

  it('Should throw error for an email with a different domain', () => {
    expect(() => Email.create('test@gmail.com')).toThrow(INVALID_EMAIL_DOMAIN)
  })

  it('Should throw error for an empty email', () => {
    expect(() => Email.create('')).toThrow(INVALID_EMPTY_PARAMETER)
  })

  it('Should be ok for an email with special characters', () => {
    expect(() => Email.create('john.doe+test@northeastern.edu')).not.toThrow()
  })

  it('Should throw error for an email with leading or trailing whitespace', () => {
    expect(() => Email.create(' test@northeastern.edu ')).toThrow(INVALID_EMAIL_FORMAT)
  })
})

describe('UserManager', () => {
  let testUser;
  let email;

  beforeEach(() => {
    email = { value: 'valid_email' };
    testUser = new Athlete(1, 'Test', 'User', 'Male', 'testuser', email);
  });

  describe('sendVerificationEmail', () => {
    it('should send a verification email', async () => {
      await testUser.sendVerificationEmail();
      expect(testUser.tokenState.getToken('VerifyEmail')).toBeDefined();
    });
  });
});
