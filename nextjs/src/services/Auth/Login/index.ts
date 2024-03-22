'use server';
import * as z from 'zod';
import { prisma } from '@/lib/db';
import { LoginSchema } from '@/schema';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { generateVerificationToken } from '@services/Token';
import { sendVerificationEmail } from '@services/Auth/EmailService';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid Fields' };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser || !existingUser.email) {
    return { error: 'No account found with this email address' };
  }

  if (!existingUser.password) {
    return {
      error:
        'This account was registered using a social login. Please use the corresponding social login button to sign in',
    };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email);
    sendVerificationEmail(verificationToken.email, verificationToken.token);

    return {
      success: 'Confirmation email sent',
    };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'AccessDenied':
          return { error: 'Access Denied!' };
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' };
        default:
          return { error: 'Something went wrong!' };
      }
    }
    throw error;
  }

  return { success: 'Email sent' };
};
