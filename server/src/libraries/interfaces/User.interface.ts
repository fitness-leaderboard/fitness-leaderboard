import { type Email } from '../model/Email'
import { Gender } from '../model/Types'

export interface User {
  userId: number
  firstName: string
  lastName: string
  gender: Gender
  userName: string
  email: Email
}
