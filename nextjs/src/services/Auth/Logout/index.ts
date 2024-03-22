'use server';

import { signOut } from 'next-auth/react';

// Logout function for server side
export const logout = async () => {
  await signOut();
};
