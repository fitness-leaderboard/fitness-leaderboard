import express from 'express';
import { authenticateStrava, rootHandler, initiateOAuth, getActivities } from '../api/strava.api'; // Adjust the path accordingly

const router = express.Router();

// Define routes
// router.get('/', rootHandler); // Root route
// router.get('/authenticateStrava', authenticateStrava); // Strava authentication route
// router.get('/initiateOAuth', initiateOAuth); 
router.get('/getActivities', getActivities); // Get activities route
export default router;
