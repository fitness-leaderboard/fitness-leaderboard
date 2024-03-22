'use client';
import React, { useState } from 'react';
import { reset } from '@services/Auth/Reset';

const ResetForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const payLoad = {
      email: event.currentTarget.email.value,
    };

    reset(payLoad)
      .then(data => {
        if (data?.error) {
          alert(data.error);
        }

        if (data?.success) {
          alert(data.success);
        }
      })
      .catch(() => alert('Something went wrong'));

    setIsLoading(false);
  };


  return (
    <>
      <h1>Reset Password</h1>
      <form className='auth-form' action='#' method='post' onSubmit={handleSubmitReset}>
        <div className='input-group'>
          <div>
            <input type='text' placeholder='Email' name='email' required />
          </div>
          <button
            type='submit'
            disabled={isLoading}
            style={{
              backgroundColor: '#007bff',
            }}>
            Submit
          </button>
        </div>
      </form>
      <div style={{ width: '100%', textAlign: 'center', margin: '20px 0' }}>
      </div>
      <p>
        <a href='/auth/login'>Return to Login</a>
      </p>
    </>
  );
};

export default ResetForm;
