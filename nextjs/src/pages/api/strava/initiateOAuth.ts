import querystring from 'querystring'
import dotenv from 'dotenv'
import { NextApiRequest, NextApiResponse } from 'next/types'

dotenv.config()

const client_id = process.env.STRAVA_CLIENT_ID
const client_secret = process.env.STRAVA_CLIENT_SECRET
// const STRAVA_API_URL = 'https://www.strava.com/api/v3';
const auth_link = 'https://www.strava.com/oauth/token'

// New route to initiate the OAuth flow
export const initiateOAuth = (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body.id
  if (client_id) {
    const params = new URLSearchParams({
      client_id: client_id,
      redirect_uri: `http://localhost:3000/api/strava/callback/${token}`,
      response_type: 'code',
      approval_prompt: 'auto',
      scope: 'activity:read_all',
    })
    res.redirect('https://www.strava.com/oauth/authorize?' + params.toString())
  }
}

// get athlete
// export const getAthlete = async (req: Request, res: Response) => {
//     const athlete_link = `https://www.strava.com/api/v3/athlete?access_token=${res.access_token}`
//     try {
//       const response = await fetch(athlete_link, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       console.log('Athlete:', data);
//       res.status(200).json(data);
//     } catch (error) {
//       console.error('Error during OAuth:', error);
//       res.status(500).json({ error: 'Failed to authenticate with Strava' });
//     }
// }

// get activity
// export const getActivity = async (req: Request, res: Response) => {
//     const StravaApiV3 = require('strava_api_v3');
//     const defaultClient = StravaApiV3.ApiClient.instance;

//     // Configure OAuth2 access token for authorization: strava_oauth
//     const strava_oauth = defaultClient.authentications['strava_oauth'];
//     strava_oauth.accessToken = "YOUR ACCESS TOKEN"

//     const api = new StravaApiV3.ActivitiesApi()

//     const opts = {
//     'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
//     'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
//     'page': 56, // {Integer} Page number. Defaults to 1.
//     'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
//     };

//     const callback = function(error, data, res) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log('API called successfully. Returned data: ' + data);
//     }
//     };
//     api.getLoggedInAthleteActivities(opts, callback);
// }
