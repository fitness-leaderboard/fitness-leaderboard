import { Email } from 'src/model/Email'
import { NextApiRequest, NextApiResponse } from "next/types";
import path from "path";
import fs from 'fs'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

/**
 * sendForgotPasswordEmail
 *
 * This is an asynchronous function that handles the '/sendForgotPasswordEmail' route.
 *
 * It sends a password reset email to the email address provided in the query parameters.
 * It first validates the email address, and if it's valid, it sends the email using the 'resend.emails.send' method.
 * The HTML content of the email is set to the 'sendForgotPasswordEmailHtml' constant.
 *
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 */
export const sendForgotPasswordEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const receipientEmail = req.query.email as string
  const resend = new Resend(process.env.RESEND_API_KEY)

  if (!receipientEmail) {
    return res.status(400).json({ error: 'No receipient email provided' })
  }

  const forgotPasswordEmailHtml = fs.readFileSync(path.join(__dirname, 'public/forgotPassword.html'), 'utf8')

  try {
    if (!Email.create(receipientEmail)) {
      return res.status(400).json({ error: 'Invalid email domain provided. Must be northeastern.edu or husky.neu.edu' })
    }

    await resend.emails.send({
      from: `Husky Pack <husky-leaderboard@${process.env.TEST_DOMAIN}>`,
      to: receipientEmail,
      subject: 'Join the Pack',
      html: forgotPasswordEmailHtml
    })
  }
  catch (error) {
    return res.status(400).json({ message: error })
  }

  res.status(200).json({ message: `Forgot email sent to ${receipientEmail}!` })
}
