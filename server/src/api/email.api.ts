import { 
  type Response, 
  type Request, 
  //type NextFunction 
} from 'express'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import { Email } from '../libraries/model/Email'

dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)


/**
 * validEmailFormat
 * 
 * This is an asynchronous function that handles the '/validEmailFormat' route.
 *
 * It validates the email address provided in the query parameters.
 * 
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 * Sample Request: http://localhost:8080/validEmailFormat?email=lin.kenn@northeastern.edu
 */
export const validEmailFormat = async (
  req: Request, 
  res: Response,
  //next: NextFunction
) => {
  const email = req.query.email as string

  if (!email) {
    return res.status(400).json({ error: 'No email provided' })
  }
  try { 
    !Email.create(email) 
  } catch (error) {
    return res.status(400).json({ message: error.message})
  }

  return res.status(200).json({ message: 'Valid email format' })
}


/**
 * sendVerificationEmail
 *
 * This is an asynchronous function that handles the '/sendVerificationEmail' route.
 *
 * It sends a verification email to the email address provided in the query parameters.
 * It first validates the email address, and if it's valid, it sends the email using the 'resend.emails.send' method.
 *
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 * Sample Request: http://localhost:8080/sendVerificationEmail?email=lin.kenn@northeastern.edu&token=NU2024
 */
export const sendVerificationEmail = async (
  req: Request, 
  res: Response,
  //next: NextFunction
) => {
  const receipientEmail = req.query.email as string
  const Token = req.query.token as string
  const fromEmail = `Husky Pack <husky-leaderboard@${process.env.TEST_DOMAIN}>`;

  if (!receipientEmail) {
    return res.status(400).json({ error: 'No receipient email provided' })
  }

  if (!Token) {
    return res.status(400).json({ error: 'No token provided' })
  }

  try {
    if (!Email.create(receipientEmail)) {
      return res.status(400).json({ error: 'Invalid email domain provided. Must be northeastern.edu or husky.neu.edu' })
    }

    if (Token.length !== 6 || !Token.match(/^[0-9A-Z]+$/)) {
      return res.status(400).json({ error: 'Invalid token provided. Must be six characters and contain only 0-9A-Z' })
    }

    const verifyEmailHtml = fs.readFileSync(path.join(__dirname, '../../public/verifyEmail.html'), 'utf8').replace('verifyTokenPlaceholder', Token)

    await resend.emails.send({
      from: fromEmail,
      to: receipientEmail,
      subject: 'Join the Pack',
      html: verifyEmailHtml
    })
  }
  catch (error) {
    return res.status(400).json({ message : error.message })
  } 

  return res.status(200).json({message: `Email sent to ${receipientEmail} with token ${Token}!` })
}

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
 * Sample Request: http://localhost:8080/sendForgotPasswordEmail?email=lin.kenn@northeastern.edu
 */
export const sendForgotPasswordEmail = async (
  req: Request,
  res: Response,
  //next: NextFunction
) => {
  const receipientEmail = req.query.email as string

  if (!receipientEmail) {
    return res.status(400).json({ error: 'No receipient email provided' })
  }

  const forgotPasswordEmailHtml = fs.readFileSync(path.join(__dirname, '../../public/forgotPassword.html'), 'utf8')

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
    return res.status(400).json({ message: error.message })
  }

  res.status(200).json({ message: `Forgot email sent to ${receipientEmail}!` })
}
