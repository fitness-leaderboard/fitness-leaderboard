import { Resend } from 'resend';

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const fromEmail = `Husky Pack <husky-leaderboard@${process.env.TEST_DOMAIN}>`;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Reset Your Password',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });
  } catch (e) {
    console.error(e);
  }
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const fromEmail = `Husky Pack <husky-leaderboard@${process.env.TEST_DOMAIN}>`;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Join the Pack',
      html: `<p>Click <a href="${confirmLink}">here</a> to verify your email address.</p>`,
    });
  } catch (e) {
    console.error(e);
  }
};
