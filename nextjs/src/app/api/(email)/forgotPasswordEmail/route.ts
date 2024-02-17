/**
 * Kenny work on this
 */

// import { Email } from '@model/Email';
// import { NextApiRequest, NextApiResponse } from 'next/types';
// import { Resend } from 'resend';
// import { sendForgotPasswordEmailHtml } from '@lib/forgotPassword';

// /**
//  * sendForgotPasswordEmail
//  *
//  * This is an asynchronous function that handles the '/sendForgotPasswordEmail' route.
//  *
//  * It sends a password reset email to the email address provided in the query parameters.
//  * It first validates the email address, and if it's valid, it sends the email using the 'resend.emails.send' method.
//  * The HTML content of the email is set to the 'sendForgotPasswordEmailHtml' constant.
//  *
//  * This function is exported for use in the 'email.router' module, where it is attached to its respective route.
//  * Sample Request: http://localhost:8080/sendForgotPasswordEmail?email=lin.kenn@northeastern.edu
//  */
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   const receipientEmail = req.body;
//   const fromEmail = `Husky Pack <husky-leaderboard@${process.env.TEST_DOMAIN}>`;
//   const resend = new Resend(process.env.RESEND_API_KEY);

//   if (!receipientEmail) {
//     return res.status(400).json({ error: 'No receipient email provided' });
//   }

//   try {
//     if (!Email.create(receipientEmail)) {
//       return res
//         .status(400)
//         .json({
//           error: 'Invalid email domain provided. Must be northeastern.edu or husky.neu.edu',
//         });
//     }

//     await resend.emails.send({
//       from: fromEmail,
//       to: receipientEmail,
//       subject: 'Join the Pack',
//       html: sendForgotPasswordEmailHtml,
//     });
//   } catch (error) {
//     return res.status(400).json({ message: (error as Error).message });
//   }

//   res.status(200).json({ message: `Forgot email sent to ${receipientEmail}!` });
// };

// export default handler;
