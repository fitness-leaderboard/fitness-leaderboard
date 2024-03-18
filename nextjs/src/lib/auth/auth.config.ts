import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import prisma from '@lib/db'; 
import bcrypt from 'bcrypt';
import { PrismaAdapter } from "@auth/prisma-adapter"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Credentials provider for email/password authentication
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'test@northeastern.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // If credentials are missing, return null
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const dbUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if(!dbUser || !dbUser.password) {
          return null;
        }
      
        const passwordMatch = await bcrypt.compare(credentials.password, dbUser.password);
        if (!passwordMatch) {
          return null;
        }
        
        const { password, createdAt, updatedAt, emailVerified, id, ...dbUserWithoutPassword } = dbUser;
        return dbUserWithoutPassword as User;
      },
    }),
    // Google OAuth provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // GitHub OAuth provider
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  // Using JWT for session management
  session: {
    strategy: 'jwt',
  },
  // Specifying the pages for sign in and sign out
  pages: {
    signIn: '/login',
  },
} as NextAuthOptions;