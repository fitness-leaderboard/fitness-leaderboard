import { Request, Response } from 'express';
import querystring from 'querystring';
import dotenv from 'dotenv';
import request from 'request';

dotenv.config();

const client_id = process.env.STRAVA_CLIENT_ID;
const client_secret = process.env.STRAVA_CLIENT_SECRET;
// const STRAVA_API_URL = 'https://www.strava.com/api/v3';
const auth_link = 'https://www.strava.com/oauth/token';

// New route to initiate the OAuth flow
export const initiateOAuth = (req: Request, res: Response) => {
  const token = req.headers.jwtToken;
  res.redirect(
    'https://www.strava.com/oauth/authorize?' +
      querystring.stringify({
        client_id: client_id,
        redirect_uri: `http://localhost:8080/callback/${token}`,
        response_type: 'code',
        approval_prompt: 'auto',
        scope: 'activity:read_all',
      }),
  );
};

export const callback = async (req: Request, res: Response) => {
  const token = req.body.token;

  const id = turnTokenIntoId(token);
  const code = req.query.code;
  const grant_type = 'authorization_code';

  try {
    const authOptions = {
      url: auth_link,
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
        grant_type,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
    };

    request.post(authOptions, (error: Error, response: Response, body: string) => {
      if (!error && response.statusCode === 200) {
        const responseBody = JSON.parse(body);
        const access_token = responseBody.access_token;
        const refresh_token = responseBody.refresh_token;
        const expires_at = responseBody.expires_at;
        const epxires_in = responseBody.expires_in;
        const scope = responseBody.scope;

        console.log(refresh_token);
        console.log(access_token);

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          'http://localhost:3000/home/' +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
              expires_at: expires_at,
              expires_in: epxires_in,
              scope: scope,
            }),
        );
      } else {
        res.redirect(
          'http://localhost:3000/' +
            querystring.stringify({
              error: 'invalid_token',
            }),
        );
      }
    });
  } catch (error) {
    console.error('Error during OAuth:', error);
    res.status(500).json({ error: 'Failed to authenticate with Strava' });
  }
};

export const rootHandler = (req: Request, res: Response) => {
  res.status(200).send('Welcome to the Strava authentication server!');
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
      res
        .status(response.status)
        .json({ error: `Failed to fetch Strava activities: ${response.statusText}` });
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
