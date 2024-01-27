import { Router } from 'express'

/*
 * This file defines the routes for the email-related endpoints of the application.
 * It uses Express Router to create a new router instance and import the necessary
 * handlers from the 'user.api' module.
 *
*/
import {
  registerUser,
} from '../api/user.api'

const router = Router()

router.post('/registerUser', registerUser)

export default router
