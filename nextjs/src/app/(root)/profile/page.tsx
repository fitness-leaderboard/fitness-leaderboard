'use client'
import React from 'react';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';

export default function Profile() {
  const user = useCurrentUser();
  
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  ); 
}
