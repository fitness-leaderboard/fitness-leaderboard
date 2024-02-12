import { NextApiRequest, NextApiResponse } from "next/types";
import request from 'request';
import querystring from 'querystring';
import URLSearchParams from '@ungap/url-search-params'

const client_id = process.env.STRAVA_CLIENT_ID;
const client_secret = process.env.STRAVA_CLIENT_SECRET;
const auth_link = 'https://www.strava.com/oauth/token';

export const callback = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body.token

  //const { id } = turnTokenIntoId(token)
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

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log('Body:', body.type);
        const responseBody = JSON.parse(body);
        const access_token = responseBody.access_token;
        const refresh_token = responseBody.refresh_token;
        const expires_at = responseBody.expires_at;
        const expires_in = responseBody.expires_in;
        const scope = responseBody.scope;

        console.log(refresh_token);
        console.log(access_token);

        // we can also pass the token to the browser to make requests from there
        if (access_token) {
          const params = new URLSearchParams({
            access_token: access_token,
            refresh_token: refresh_token,
            expires_in: expires_in,
            scope: scope,
          });
          res.redirect('http://localhost:3000/api/strava?' + params.toString());
        } else {
          const params = new URLSearchParams({
            error: 'invalid_token',
          });
          res.redirect('http://localhost:3000/api/strava?' + params.toString());
        }
      }
    });
  } catch (error) {
    console.error('Error during OAuth:', error);
    res.status(500).json({ error: 'Failed to authenticate with Strava' });
  }
};


