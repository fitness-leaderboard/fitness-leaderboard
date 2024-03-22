'use client';

import '@css/auth.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
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
