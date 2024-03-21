'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleSignInButton, GithubSignInButton } from './AuthButton';
import { register } from '@/actions/register';

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmitSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const password = event.currentTarget.password.value;
    const confirmPassword = event.currentTarget.confirmPassword.value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    const payLoad = {
      firstName: event.currentTarget.firstName.value,
      lastName: event.currentTarget.lastName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    const res = await register(payLoad);
    if (res.error) {
      alert(res.error);
    } else {
      alert('Registered successfully. Confirmation email sent!');
      push('/');
    }

    setIsLoading(false);
  };

  return (
    <>
      <h1>Register</h1>
      <form className='auth-form' action='#' method='post' onSubmit={handleSubmitSignin}>
        <div className='input-group'>
          <div>
            <input type='text' placeholder='First Name' name='firstName' required />
          </div>
          <div>
            <input type='text' placeholder='Last Name' name='lastName' required />
          </div>
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
            Register
          </button>
        </div>
      </form>
      <GoogleSignInButton />
      <GithubSignInButton />
      <p>
        {`Don't have an account? `} <a href='/login'>Login</a>
      </p>
    </>
  );
};

export default RegisterForm;
