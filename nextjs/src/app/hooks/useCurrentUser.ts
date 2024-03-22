'use client'
import { useSession } from 'next-auth/react';

// Returns the current user from the session from client side
export const useCurrentUser = () => {
  const session = useSession();
  return session.data?.user;
}