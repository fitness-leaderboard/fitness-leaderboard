import * as nodemailer from 'nodemailer';
import { validateEmail } from '../../src/libraries/utils/emailValidation';
import { sendConfirmationEmail } from '../../src/services/sendConfirmationMailer';

// jest.mock('nodemailer', () => ({
//   createTransport: jest.fn(),
//   sendMail: jest.fn(),
// }));

// jest.mock('../../src/libraries/utils/emailValidation', () => ({
//   validateEmail: jest.fn(),
// }));

// describe('sendConfirmationEmail', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should send confirmation email for valid email', async () => {
//     const mockTransporter = {
//       sendMail: jest.fn(),
//     };

//     (nodemailer.createTransport as jest.Mock).mockReturnValue(mockTransporter);
//     (validateEmail as jest.Mock).mockReturnValue(true);

//     const recipientEmail = 'testEmail@northeastern.edu';

//     await sendConfirmationEmail(recipientEmail);

//     expect(validateEmail).toHaveBeenCalledWith(recipientEmail);
//     expect(nodemailer.createTransport).toHaveBeenCalledWith({
//       host: 'smtp.office365.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_ADDRESS,
//         pass: process.env.PASSWORD,
//       },
//     });
//     expect(mockTransporter.sendMail).toHaveBeenCalled();
//   });

//   it('should not send email for invalid email', async () => {
//     (validateEmail as jest.Mock).mockReturnValue(false);

//     const recipientEmail = 'invalid-email';

//     await sendConfirmationEmail(recipientEmail);

//     expect(validateEmail).toHaveBeenCalledWith(recipientEmail);
//     expect(nodemailer.createTransport).not.toHaveBeenCalled();
//   });

//   it('should throw an error if email sending fails', async () => {
//     const mockTransporter = {
//       sendMail: jest.fn().mockRejectedValue(new Error('Failed to send email')),
//     };

//     (nodemailer.createTransport as jest.Mock).mockReturnValue(mockTransporter);
//     (validateEmail as jest.Mock).mockReturnValue(true);

//     const recipientEmail = 'test@northeastern.edu';

//     // Use Jest's `toThrow` matcher to check if the function throws an error
//     await expect(sendConfirmationEmail(recipientEmail)).rejects.toThrow('Error sending email');

//     expect(validateEmail).toHaveBeenCalledWith(recipientEmail);
//     expect(nodemailer.createTransport).toHaveBeenCalledWith({
//       host: 'smtp.office365.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_ADDRESS,
//         pass: process.env.PASSWORD,
//       },
//     });
//     expect(mockTransporter.sendMail).toHaveBeenCalled();
//   });
// });

describe('sendConfirmationEmail to personal', () => {
  it("Real email", async ()=> {
    sendConfirmationEmail('kennylin2830@gmail.com')
   // expect(1 === 1).toBe(true)
  })
})