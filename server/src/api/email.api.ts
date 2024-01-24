import { 
  type Response, 
  type Request, 
  //type NextFunction 
} from 'express'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import { Email } from '../libraries/types/Email'

dotenv.config()

const verifyEmailHtml = fs.readFileSync(path.join(__dirname, '../../public/verifyEmail.html'), 'utf8')
const forgotPasswordEmailHtml = fs.readFileSync(path.join(__dirname, '../../public/forgotPassword.html'), 'utf8')

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * verifyEmail
 *
 * This is an asynchronous function that handles the '/verifyEmail' route.
 *
 * It sends a verification email to the email address provided in the query parameters.
 * It first validates the email address, and if it's valid, it sends the email using the 'resend.emails.send' method.
 * The HTML content of the email is set to the 'verifyEmailHtml' constant.
 *
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 * Sample Request: http://localhost:8080/verifyEmail?email=lin.kenn@northeastern.edu
 */
export const verifyEmail = async (
  req: Request,
  res: Response,
  //next: NextFunction
) => {
  const receipientEmail = req.query.email as string

  if (!receipientEmail) {
    return res.status(400).json({ error: 'No receipient email provided' })
  }

  if (!Email.create(receipientEmail)) {
    return res.status(400).json({ error: 'Invalid email domain. Must be northeastern.edu' })
  }

  const { data, error } = await resend.emails.send({
    from: `Husky Pack <husky-leaderboard@>${process.env.TEST_DOMAIN}`,
    to: receipientEmail[0],
    subject: 'Join the Pack',
    html: verifyEmailHtml
  })

  if (error) {
    return res.status(400).json({ error })
  }

  res.status(200).json({ data })
}

/**
 * forgotPasswordEmail
 *
 * This is an asynchronous function that handles the '/forgotPasswordEmail' route.
 *
 * It sends a password reset email to the email address provided in the query parameters.
 * It first validates the email address, and if it's valid, it sends the email using the 'resend.emails.send' method.
 * The HTML content of the email is set to the 'forgotPasswordEmailHtml' constant.
 *
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 * Sample Request: http://localhost:8080/forgotPasswordEmail?email=lin.kenn@northeastern.edu
 */
export const forgotPasswordEmail = async (
  req: Request,
  res: Response,
  //next: NextFunction
) => {
  const receipientEmail = req.query.email
  if (!receipientEmail) {
    return res.status(400).json({ error: 'No receipient email provided' })
  }

  const { data, error } = await resend.emails.send({
    from: 'Husky Pack <husky-leaderboard@kenny-lin.me>',
    to: receipientEmail[0],
    subject: 'Join the Pack',
    html: forgotPasswordEmailHtml
  })

  if (error) {
    return res.status(400).json({ error })
  }

  res.status(200).json({ data })
}
