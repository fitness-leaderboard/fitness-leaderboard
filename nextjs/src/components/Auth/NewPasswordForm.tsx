'use client';
import React, { useState } from 'react';
import { newPassword } from '@services/Auth/NewPassword';
import { useRouter, useSearchParams } from 'next/navigation';

const NewPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const handleSubmitReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const password = event.currentTarget.password.value;
    const confirmPassword = event.currentTarget.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const payLoad = {
      password: event.currentTarget.password.value,
    };

    newPassword(payLoad, token)
      .then(data => {
        if (data?.error) {
          alert(data.error);
        }

        if (data?.success) {
          alert(data.success);
          push('/auth/login');
        }
      })
      .catch(() => alert('Something went wrong'));

    setIsLoading(false);
  };

  return (
    <>
      <h1>Enter a new password</h1>
      <form className='auth-form' action='#' method='post' onSubmit={handleSubmitReset}>
        <div className='input-group'>
          <div>
            <input type='password' placeholder='Password' name='password' required />
          </div>
          <div>
            <input type='password' placeholder='Confirm Password' name='confirmPassword' required />
          </div>
          <button
            type='submit'
            disabled={isLoading}
            style={{
              backgroundColor: '#007bff',
            }}>
            Reset Password
          </button>
        </div>
      </form>
      <div style={{ width: '100%', textAlign: 'center', margin: '20px 0' }}></div>
      <p>
        <a href='/auth/login'>Return to Login</a>
      </p>
    </>
  );
};

export default NewPasswordForm;
