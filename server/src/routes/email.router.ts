import { Router } from 'express';

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
  validEmailFormat,
  sendVerificationEmail,
  sendForgotPasswordEmail,
  postUser,
} from '../api/email.api';

const router = Router();

router.get('/validEmailFormat', validEmailFormat);
router.get('/sendVerificationEmail', sendVerificationEmail);
router.get('/sendForgotPasswordEmail', sendForgotPasswordEmail);
router.post('/postUser', postUser);

export default router;
