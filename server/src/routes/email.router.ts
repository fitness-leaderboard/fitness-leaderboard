import { Router } from 'express'

/*
 * This file defines the routes for the email-related endpoints of the application.
 * It uses Express Router to create a new router instance and import the necessary
 * handlers from the 'email.api' module.
 *
 * GET /verifyEmail
 * GET /forgotPasswordEmail
*/
import {
  verifyEmail,
  forgotPasswordEmail
} from '../api/email.api'

const router = Router()

router.get('/verifyEmail', verifyEmail)
router.get('/forgotPasswordEmail', forgotPasswordEmail)

export default router
