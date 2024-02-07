import { Email } from 'src/model/Email'
import { NextApiRequest, NextApiResponse } from "next/types";
import path from "path";
import fs from 'fs'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

/**
 * sendVerificationEmail
 *
 * This is an asynchronous function that handles the '/sendVerificationEmail' route.
 *
 * It sends a verification email to the email address provided in the query parameters.
 * It first validates the email address, and if it's valid, it sends the email using the 'resend.emails.send' method.
 *
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 */
export const sendVerificationEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const receipientEmail = req.query.email as string
  const Token = req.query.token as string
  const fromEmail = `Husky Pack <husky-leaderboard@${process.env.TEST_DOMAIN}>`;
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    if (!receipientEmail) {
      return res.status(400).json({ error: 'No receipient email provided' })
    }

    if (!Token) {
      return res.status(400).json({ error: 'No token provided' })
    }

    if (!Email.create(receipientEmail)) {
      return res.status(400).json({ error: 'Invalid email domain provided. Must be northeastern.edu or husky.neu.edu' })
    }

    if (Token.length !== 6 || !Token.match(/^[0-9A-Z]+$/)) {
      return res.status(400).json({ error: 'Invalid token provided. Must be six characters and contain only 0-9A-Z' })
    }

    const verifyEmailHtml = fs.readFileSync(path.join(__dirname, 'public/verifyEmail.html'), 'utf8').replace('verifyTokenPlaceholder', Token)

    await resend.emails.send({
      from: fromEmail,
      to: receipientEmail,
      subject: 'Join the Pack',
      html: verifyEmailHtml
    })
  }
  catch (error) {
    return res.status(400).json({ message: error })
  }

  return res.status(200).json({ message: `Email sent to ${receipientEmail} with token ${Token}!` })
}