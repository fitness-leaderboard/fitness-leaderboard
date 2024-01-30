import { Router } from 'express'

/*
 * This file defines the routes for the email-related endpoints of the application.
 * It uses Express Router to create a new router instance and import the necessary
 * handlers from the 'email.api' module.
 *
 * GET /validEmailFormat
 * GET /sendVerificationEmail
 * GET /sendForgotPasswordEmail
*/
import {
  validateEmailFormat,
  sendVerificationEmail,
  sendForgotPasswordEmail
} from '../api/email.api'

const router = Router()

router.get('/email/validateFormat', validateEmailFormat)
router.post('/email/verifyEmail', sendVerificationEmail)
router.post('/email/forgotPassword', sendForgotPasswordEmail)

export default router
