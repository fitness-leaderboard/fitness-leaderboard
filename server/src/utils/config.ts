import dotenv from 'dotenv';
dotenv.config();

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TEST_DOMAIN = process.env.TEST_DOMAIN;
const JWT_SECRET = process.env.JWT_SECRET as string;
const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;

export { RESEND_API_KEY, TEST_DOMAIN, JWT_SECRET, STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET };
