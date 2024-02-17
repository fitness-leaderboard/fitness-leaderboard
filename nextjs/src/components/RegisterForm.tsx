'use client';
import React from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const { push } = useRouter();

  const handleSubmitSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payLoad = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post('/api/register', payLoad);
      alert(JSON.stringify(data, null, 2));

      push('/profile');
    } catch (err) {
      const error = err as AxiosError;
      alert(error.message);
    }
  };

  return (
    <>
      <form action='#' method='post' onSubmit={handleSubmitSignin}>
        <div>
          <div>
            <input type='text' placeholder='Northeastern Email' name='email' required />
          </div>
          <div>
            <input type='password' placeholder='Password' name='password' required />
          </div>
          <div>
            <input type='password' placeholder='Confirm' name='confirmPassword' required />
          </div>
          <button type='submit'>Signup</button>
        </div>
      </form>
      <p>
        {`Don't have an account? `} <a href='/login'>Login</a>
      </p>
    </>
  );
};

export default RegisterForm;
