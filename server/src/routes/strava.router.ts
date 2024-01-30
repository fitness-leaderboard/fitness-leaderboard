import express from 'express';
import { callback, rootHandler, initiateOAuth, getActivities } from '../api/strava.api'; // Adjust the path accordingly

const router = express.Router();

// Define routes
router.get('/', rootHandler); // Root route
router.get('/initiateOAuth', initiateOAuth);
router.get('/callback', callback); // Strava authentication route
router.get('/getActivities', getActivities); // Get activities route
export default router;
