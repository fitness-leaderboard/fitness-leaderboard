'use client';
import React from 'react';
import jwt from 'jsonwebtoken';
import axios, { AxiosError } from 'axios';

const SigninForm = () => {
  const [error, setError] = React.useState('');

  const handleSubmitSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payLoad = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post('/api/login', payLoad);

      alert(JSON.stringify(data, null, 2));
    } catch (err) {
      const error = err as AxiosError;
      alert(error.message);
    }
  };

  return (
    <form action='#' method='post' onSubmit={handleSubmitSignin}>
      <div>
        <div>
          <input type='text' placeholder='Northeastern Email' name='email' required />
        </div>
        <div>
          <input type='password' placeholder='Password' name='password' required />
        </div>
        <button type='submit'>Login</button>
        <div>{error}</div>
      </div>
    </form>
  );
};

export default SigninForm;
