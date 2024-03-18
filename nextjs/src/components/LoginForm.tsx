'use client';
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { GithubSignInButton, GoogleSignInButton } from './AuthButton';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmitSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const payLoad = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    const res = await signIn('credentials', {
      ...payLoad,
      redirect: false,
    });
    if(!res?.ok) {
      alert(res?.error);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  };

  return (
    <>
      <h1>Log In</h1>
      <form className='auth-form' action='#' method='post' onSubmit={handleSubmitSignin}>
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
      <GoogleSignInButton/>
      <GithubSignInButton/>
      <p>
        {`Don't have an account? `} <a href='/register'>Sign up</a>
      </p>
    </>
  );
};

export default LoginForm;
