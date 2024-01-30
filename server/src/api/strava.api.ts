import { Request, Response } from 'express';

const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
// const STRAVA_API_URL = 'https://www.strava.com/api/v3';

const auth_link = "https://www.strava.com/oauth/token"

export const authenticateStrava = async (
    req: Request,
    res: Response
  ) => {
    const code = req.query.code;
    const client_id = CLIENT_ID;
    const client_secret = CLIENT_SECRET;
    const grant_type = 'authorization_code';
    
    try {
      const response = await fetch(auth_link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id,
          client_secret,
          code,
          grant_type,
        }),
      });
  
      const data = await response.json();
      
      // Log the data
      console.log('OAuth Response:', data);
      
      // Send the response to the client
      res.status(200).json(data);
    } catch (error) {
      console.error('Error during OAuth:', error);
      res.status(500).json({ error: 'Failed to authenticate with Strava' });
    }
  };

export const rootHandler = (req: Request, res: Response) => {
    res.status(200).send('Welcome to the Strava authentication server!');
};
    
// New route to initiate the OAuth flow
export const initiateOAuth = (req: Request, res: Response) => {
    const stravaAuthUrl = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000/strava/authenticateStrava&response_type=code&scope=read_all`;
    res.redirect(stravaAuthUrl);
  };

// get activities
export const getActivities = async (req: Request, res: Response) => {
    // const accessToken = req.access_token;
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=07c047cafbaac3db45cdaf1895b41dec694c778c`;
  
    try {
      const response = await fetch(activities_link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        // Handle non-200 status codes
        console.error('Error fetching Strava activities:', response.statusText);
        res.status(response.status).json({ error: `Failed to fetch Strava activities: ${response.statusText}` });
        return;
      }
  
      const data = await response.json();
      console.log('Activities:', data);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching Strava activities:', error);
      res.status(500).json({ error: 'Failed to fetch Strava activities' });
    }
  };
  

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