'use client';
import NavBar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import '@css/sidebar.css';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface UserResponse {
  user: string | null;
  error: AxiosError | null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const func = async () => {
      const { user, error } = await getUser();
      if (error) {
        console.error(error);
        router.push('/login');
        return;
      }
      setIsSuccess(true);
    };
    func();
  }, [router]);

  if (!isSuccess) {
    return <div>Loading...</div>;
  }

  return (
    <main className='root' style={{ display: 'flex' }}>
      <div className='root-container' style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <div className='wrapper' style={{ flex: 1 }}>
          <NavBar />
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
}

async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get('/api/me');
    return {
      user: data,
      error: null,
    };
  } catch (err) {
    const error = err as AxiosError;
    return {
      user: null,
      error,
    };
  }
}
