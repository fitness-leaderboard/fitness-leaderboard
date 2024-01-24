import { type Email } from '../types/Email'

export interface User {
  userId: number
  firstName: string
  lastName: string
  gender: string
  userName: string
  email: Email

  getFullName: () => string
}
