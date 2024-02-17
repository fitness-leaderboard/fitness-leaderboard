'use client';
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmitSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

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
    setIsLoading(false);
  };

  return (
    <>
      <h1>Register</h1>
      <form className='auth-form' action='#' method='post' onSubmit={handleSubmitSignin}>
        <div className='input-group'>
          <div>
            <input type='text' placeholder='Northeastern Email' name='email' required />
          </div>
          <div>
            <input type='password' placeholder='Password' name='password' required />
          </div>
          <div>
            <input type='password' placeholder='Confirm' name='confirmPassword' required />
          </div>
          <button
            type='submit'
            disabled={isLoading}
            style={{
              backgroundColor: '#007bff',
            }}>
            Signup
          </button>
        </div>
      </form>
      <p>
        {`Don't have an account? `} <a href='/login'>Login</a>
      </p>
    </>
  );
};

export default RegisterForm;
