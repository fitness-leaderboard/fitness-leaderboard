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
  callbacks: {
    async session({ token, session }) {
      return session;
    },
    async signIn({ user, account }) {
      // Allow OAuth to sign in without Email Verification
      if (account?.provider !== 'credentials') return true;

      const existingUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
      });
      // Prevent user to sign in if email not verified
      if (!existingUser?.emailVerified) return false;

      return true;
    },
    async jwt({ token }) {
      token.customField = 'customField';
      return token;
    },
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  // Using JWT for session management
  session: {
    strategy: 'jwt',
  },
  ...authConfig,
});
