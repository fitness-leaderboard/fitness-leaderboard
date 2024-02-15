import { NextApiRequest, NextApiResponse } from 'next/types'
import { Email } from 'src/model/Email'

/**
 * validEmailFormat
 *
 * This is an asynchronous function that handles the '/validEmailFormat' route.
 *
 * It validates the email address provided in the query parameters.
 *
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const email = req.query.email as string
    try {
      !Email.create(email)
    } catch (error) {
      return res.status(400).json({ message: 'error' })
    }

    return res.status(200).json({ message: 'Valid email format' })
  } else {
    return res.status(400).json({ message: 'Invalid request method' })
  }
}

export default handler
