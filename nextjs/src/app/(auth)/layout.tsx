'use client';
import { getUser } from '@/lib/getUser';
import '@css/auth.css';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const validateUser = async () => {
      const { user } = await getUser();
      if (user) {
        console.error(user);
        router.push('/profile');
        return;
      }
      setIsSuccess(true);
    };
    validateUser();
  }, [router]);

  if (!isSuccess) {
    return <div>Loading...</div>;
  }
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
      }}>
      {children}
    </div>
  );
}
