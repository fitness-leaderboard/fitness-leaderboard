const nodemailer = require('nodemailer')
//import { validateEmail } from '../libraries/utils/emailValidation';
//import { Email } from '../libraries/types/Email.types'

async function sendConfirmationEmail() {

  const _emailAddress = 'lin.kenn@northeastern.edu'
  const _emailPassword = 'Klin215283284!'

  console.log("run")
  // if (!validateEmail(receipient)) {
  //   console.log("Invalid Email Address")
  //   return  
  // }

  //Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'hostmail', // Outlook SMTP server

    auth: {
      user: _emailAddress, // Your Outlook email
      pass: _emailPassword // Your Outlook email password
    },
  });

  // const transporter = nodemailer.createTransport("SMTP", {
  //   service: 'Gmail',
  //   auth: {
  //     user: _emailAddress, // Your Outlook email
  //     pass: _emailPassword // Your Outlook email password 
  //   }
  // });


  // HTML content for the email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
          h2 {
            color: #007bff;
          }
          p {
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Confirmation Email</h2>
          <p>Thank you for registering!</p>
          <p>Your account is now confirmed.</p>
        </div>
      </body>
    </html>
  `;

  // Define the email content
  const mailOptions = {
    from: _emailAddress,
    to: 'lin.kenn@northeastern.edu',
    subject: 'Registration Confirmation',
    html: htmlContent,
  };

  try {
    // Send the email using Nodemailer
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.log('Error Email');
    throw new Error("Error sending email");
  }
}

sendConfirmationEmail()