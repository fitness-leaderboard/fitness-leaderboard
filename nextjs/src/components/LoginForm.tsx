'use client';
import React from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const { push } = useRouter();

  const handleSubmitSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payLoad = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post('/api/login', payLoad);
      alert(JSON.stringify(data, null, 2));

      push('/profile');
    } catch (err) {
      const error = err as AxiosError;
      alert(error.message);
    }
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
            style={{
              backgroundColor: '#007bff',
            }}>
            Login
          </button>
        </div>
      </form>
      <p>
        {`Don't have an account? `} <a href='/register'>Sign up</a>
      </p>
    </>
  );
};

export default LoginForm;
