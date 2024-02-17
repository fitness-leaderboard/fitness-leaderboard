'use client';
import NavBar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { getUser } from '@/lib/getUser';
import '@css/sidebar.css';
import '@css/navbar.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const validateUser = async () => {
      const { error } = await getUser();
      if (error) {
        router.push('/login');
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
