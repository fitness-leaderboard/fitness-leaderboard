import { Router } from 'express';
import { login, register } from '../api/auth.api';
/*
 * This file defines the routes for the email-related endpoints of the application.
 * It uses Express Router to create a new router instance and import the necessary
 * handlers from the 'user.api' module.
 *
 */

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;
