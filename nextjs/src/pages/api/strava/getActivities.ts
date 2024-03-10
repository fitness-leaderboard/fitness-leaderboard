import { NextApiRequest, NextApiResponse } from 'next/types'

// get activities from strava
export const getActivities = async (req: NextApiRequest, res: NextApiResponse) => {
  // const accessToken = req.access_token;
  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=07c047cafbaac3db45cdaf1895b41dec694c778c`
  const token = 123
  try {
    const response = await fetch(activities_link, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      // Handle non-200 status codes
      console.error('Error fetching Strava activities:', response.statusText)
      res
        .status(response.status)
        .json({ error: `Failed to fetch Strava activities: ${response.statusText}` })
      return
    }

    const data = await response.json()
    console.log('Activities:', data)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching Strava activities:', error)
    res.status(500).json({ error: 'Failed to fetch Strava activities' })
  }
}
