import { NextApiRequest, NextApiResponse } from 'next/types'

export const rootHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('Welcome to the Strava authentication server!')
}
