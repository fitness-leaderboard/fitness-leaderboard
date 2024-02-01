import InvalidParametersError, {
  INVALID_EMAIL_DOMAIN,
  INVALID_EMAIL_FORMAT,
  INVALID_EMPTY_PARAMETER
} from '../errors/InvalidParametersError'

/**
 * A class representing an email. It has a private constructor to prevent direct instantiation, and a static factory method to create new instances.
 */
export class Email {
  private readonly email: string

  private constructor (email: string) {
    this.email = email
    Object.freeze(this)
  }

  get value (): string {
    return this.email
  }

  /**
   * A static factory method that creates a new Email object if the provided email is valid.
   *
   * @param email - A string representing the email.
   *
   * @returns An Email object if the email is valid, undefined otherwise.
   */
  static create (email: string): Email | undefined {
    if (Email._validate(email)) {
      return new Email(email)
    }
    return undefined
  }

  /**
   * A private static method that validates the provided email.
   *
   * @param email - A string representing the email.
   *
   * @throws InvalidParametersError if the email format is not valid (INVALID_EMAIL_FORMAT)
   * @throws InvalidParametersError if the email domain is not NEU (INVALID_EMAIL_DOMAIN)
   * @throws InvalidParametersError if the email is empty (INVALID_EMPTY_PARAMETER)
   *
   * returns true if the email is valid, throws an InvalidParametersError otherwise.
   */
  private static _validate (email: string): boolean {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      // No email provided
      throw new InvalidParametersError(INVALID_EMPTY_PARAMETER);
    }

    if (!emailRegex.test(email)) {
      // Invalid email format
      throw new InvalidParametersError(INVALID_EMAIL_FORMAT);
    }

    // Extract domain from the email
    const [, domain] = email.split('@');

    // Check if the domain is 'northeastern.edu'
    if (domain.toLowerCase() !== 'northeastern.edu' &&
        domain.toLowerCase() !== 'husky.neu.edu') {
      throw new InvalidParametersError(INVALID_EMAIL_DOMAIN);
    }

    return true;
  }
}
