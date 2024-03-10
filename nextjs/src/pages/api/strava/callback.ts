import { NextApiRequest, NextApiResponse } from 'next/types'
import request from 'request'
import querystring from 'querystring'
import jwt from 'jsonwebtoken'
import { TokenInterface } from './TokenInterface'
// import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

const client_id = process.env.STRAVA_CLIENT_ID
const client_secret = process.env.STRAVA_CLIENT_SECRET
const auth_link = 'https://www.strava.com/oauth/token'

// Need to have Prisma Client in order to run the addToken function
// const prisma = new PrismaClient()

// // helper function for adding token to the database
// async function addToken(
//   userId: number,
//   accessToken: string,
//   refreshToken: string,
//   expiresAt: number,
//   expiresIn: number,
//   scopes: string,
// ) {
//   try {
//     const newToken = await prisma.apitoken.create({
//       data: {
//         apiTypeId: 1,
//         userId: userId,
//         accessToken: accessToken, // in meters
//         refreshToken: refreshToken,
//         expiresAt: new Date(expiresAt * 1000),
//         expiresIn: expiresIn, // in meters
//         scopes: scopes,
//       },
//     })
//     console.log('Added token:', newToken)
//   } catch (error) {
//     console.error('Error adding token:', error)
//   } finally {
//     await prisma.$disconnect()
//   }
// }

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code
  const grant_type = 'authorization_code'

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
        Authorization:
          'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
    }

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const responseBody = JSON.parse(body)
        const access_token = responseBody.access_token
        const refresh_token = responseBody.refresh_token
        const expires_at = responseBody.expires_at
        const expires_in = responseBody.expires_in
        const scope = responseBody.scope
        console.log('responseBody:', responseBody)
        console.log(refresh_token)
        console.log(access_token)
        console.log(expires_at)
        console.log(expires_in)
        console.log(scope)

        // we can also pass the token to the browser to make requests from there
        if (access_token) {
          const params = new URLSearchParams({
            access_token: access_token,
            refresh_token: refresh_token,
            expires_in: expires_in,
            scope: scope,
          })

          try {
            // getting userID from the localstorage
            const hashedToken = localStorage.getItem('jwtToken')
            if (hashedToken && process.env.JWT_SECRET) {
              const decodedID = jwt.verify(
                hashedToken,
                process.env.JWT_SECRET,
              ) as TokenInterface

              // addToken(
              //   decodedID.userId,
              //   access_token,
              //   refresh_token,
              //   expires_at,
              //   expires_in,
              //   scope,
              // )
            }
          } catch (e) {
            console.log('JWT token is not valid')
          }

          // we have everything that we need, access_token, refresh_token
          console.log('params:', params.toString())
          res.redirect('http://localhost:3000/api/strava?' + params.toString())
        } else {
          const params = new URLSearchParams({
            error: 'invalid_token',
          })
          res.redirect('http://localhost:3000/api/strava?' + params.toString())
        }
      }
    })
  } catch (error) {
    console.error('Error during OAuth:', error)
    res.status(500).json({ error: 'Failed to authenticate with Strava' })
  }
}

export default handler

// get back new access_token using refresh token
