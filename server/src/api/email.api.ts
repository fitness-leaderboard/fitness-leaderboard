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
import { TokenType } from '../libraries/model/Types'
dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)


/**
 * validEmailFormat
 * 
 * This is an asynchronous function that handles the '/email/verifyEmail' route.
 *
 * It validates the email address provided in the query parameters.
 * 
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 * Sample Request: http://localhost:8080/email/validateFormat?email=lin.kenn@northeastern.edu
 */
export const validateEmailFormat = async (
  req: Request, 
  res: Response,
  //next: NextFunction
) => {
  const email = req.query.email as string
  try { 
    !Email.create(email) 
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }

  return res.status(200).json({ message: 'Valid email format' })
}


/**
 * sendVerificationEmail
 *
 * This is an asynchronous function that handles the '/email/verifyEmail' route.
 *
 * It sends a verification email to the email address provided in the query parameters.
 * It first validates the email address, and if it's valid, it sends the email using the 'resend.emails.send' method.
 *
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 * Sample Request: http://localhost:8080/email/verifyEmail?email=lin.kenn@northeastern.edu
 */
export const sendVerificationEmail = async (
  req: Request,
  res: Response,
  //next: NextFunction
) => {
  const receipientEmail = req.body.email as string
  const fromEmail = `Husky Pack <husky-leaderboard@${process.env.TEST_DOMAIN}>`;

  try {
      // Check if email exist in database and create a token and store in database
    if (!receipientEmail) {
      return res.status(400).json({ error: 'No receipient email provided' })
    }
    
    if (!Email.create(receipientEmail)) {
      return res.status(400).json({ error: 'Invalid email domain provided. Must be northeastern.edu or husky.neu.edu' })
    }
    
    const token = () => {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";

      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    }

    const verifyEmailHtml = fs.readFileSync(path.join(__dirname, '../../public/verifyEmail.html'), 'utf8').replace('verifyTokenPlaceholder', token);

    await resend.emails.send({
      from: fromEmail,
      to: receipientEmail,
      subject: 'Join the Pack',
      html: verifyEmailHtml
    })
  }
  catch (error) {
    return res.status(400).json({ message: error.message })
  }

  return res.status(200).json({message: `Email sent to ${receipientEmail} with token!` })
}

/**
 * sendForgotPasswordEmail
 *
 * This is an asynchronous function that handles the '/email/forgotPassword' route.
 *
 * It sends a password reset email to the email address provided in the query parameters.
 * It first validates the email address, and if it's valid, it sends the email using the 'resend.emails.send' method.
 * The HTML content of the email is set to the 'sendForgotPasswordEmailHtml' constant.
 *
 * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
 * Sample Request: http://localhost:8080/email/forgotPassword?email=lin.kenn@northeastern.edu
 */
export const sendForgotPasswordEmail = async (
  req: Request,
  res: Response,
  //next: NextFunction
) => {
  const receipientEmail = req.body.email as string
  const forgotPasswordEmailHtml = fs.readFileSync(path.join(__dirname, '../../public/forgotPassword.html'), 'utf8')

  try {
    // Check if email exist in database and create a token and store in database
    if (!receipientEmail) {
      return res.status(400).json({ error: 'No receipient email provided' })
    }

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

export const verifyToken = async (
  req : Request,
  res : Response,
  //next: NextFunction
) => {
  const receipientEmail = req.body.email as string
  const token = req.body.token as string
  const tokenType = req.body.tokenType as TokenType

  try {
    // Check if email exist in database and create a token and store in database
    if (!receipientEmail) {
      return res.status(400).json({ error: 'No receipient email provided' })
    }

    if (!Email.create(receipientEmail)) {
      return res.status(400).json({ error: 'Invalid email domain provided. Must be northeastern.edu or husky.neu.edu' })
    }

    if (!token) {
      return res.status(400).json({ error: 'No token provided' })
    }

    if (!tokenType) {
      return res.status(400).json({ error: 'No token type provided' })
    }

    // db get
  }
  catch (error) {
    return res.status(400).json({ message: error.message })
  }

  res.status(200).json({ message: `Successfully verified token` })
}