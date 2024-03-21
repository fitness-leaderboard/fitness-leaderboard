import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { prisma } from '@lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  // Using JWT for session management
  session: {
    strategy: 'jwt',
  },
  ...authConfig,
});
