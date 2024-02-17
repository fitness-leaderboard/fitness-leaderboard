'use client';

import SignupForm from './signup-form';

export default function Home() {
  return (
    <div style={{ width: '100%', padding: 30, justifyContent: 'center', alignContent: 'center' }}>
      <h1>Signup</h1>
      <SignupForm />
    </div>
  );
}
