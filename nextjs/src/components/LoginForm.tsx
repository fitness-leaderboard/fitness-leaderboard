'use client';
import React, { useState } from 'react';
import { GithubSignInButton, GoogleSignInButton } from './AuthButton';
import { login } from '@/actions/login';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const payLoad = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    const res = await login(payLoad);
    if(res.error) {
      alert(res.error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <h1>Log In</h1>
      <form className='auth-form' action='#' method='post' onSubmit={handleSubmitSignIn}>
        <div className='input-group'>
          <div>
            <input type='text' placeholder='Northeastern Email' name='email' required />
          </div>
          <div>
            <input type='password' placeholder='Password' name='password' required />
          </div>
          <button
            type='submit'
            disabled={isLoading}
            style={{
              backgroundColor: '#007bff',
            }}>
            Login
          </button>
        </div>
      </form>
      <div style={{ width: '100%', textAlign: 'center', margin: '20px 0' }}>
        <GoogleSignInButton />
        <GithubSignInButton />
      </div>
      <p>
        {`Don't have an account? `} <a href='/register'>Sign up</a>
      </p>
    </>
  );
};

export default LoginForm;
