export const INVALID_EMAIL_DOMAIN = 'Email must have Northeastern domain'
export const INVALID_EMPTY_PARAMETER = 'This field cannot be empty'
export const INVALID_EMAIL_FORMAT = 'Invalid email format'

export default class InvalidParametersError extends Error {
  public message: string

  public constructor (message: string) {
    super(message)
    this.message = message
  }
}
