import NextAuth from 'next-auth';
import { authOptions } from '@lib/auth/auth.config';

export const auth = NextAuth(authOptions);
