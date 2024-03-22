'use server';
import { prisma } from '@/lib/db';
import { getVerificationTokenByToken } from '@/lib/VerificationToken';

export const NewVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: 'Token does not exist!' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'Token has expired!' };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: existingToken.email,
    },
  });
  if (!existingUser) {
    return { error: 'Email does not exist!' };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'Email verified!' };
};
