import { type User } from '../interfaces/User.interface'
import { type Email } from './Email'

export abstract class Athlete implements User {
  readonly userId: number
  public firstName: string
  public lastName: string
  public userName: string
  public readonly email: Email
  public badges: string[]
  public placements: string[]
  public gender: string

  constructor (userId, firstName, lastName, userName, email, gender, badges, placements) {
    this.userId = userId
    this.firstName = firstName
    this.lastName = lastName
    this.userName = userName
    this.email = email
    this.badges = badges
    this.placements = placements
    this.gender = gender
  }

  public getFullName (): string {
    return `${this.firstName} ${this.lastName}`
  }
}
