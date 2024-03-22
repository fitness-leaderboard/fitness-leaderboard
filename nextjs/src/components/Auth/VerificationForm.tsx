'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { NewVerification } from '@services/Auth/NewValidation';
import { useSearchParams } from 'next/navigation';

const VerificationForm = () => {
  const [error, setError] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (error) return;

    if (!token) {
      setError('Missing token!');
      return;
    }

    NewVerification(token)
      .then(data => {
        if (data?.error) {
          alert(data.error);
        }

        if (data?.success) {
          alert(data.success);
        }
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [token, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div>
      <h4>Email Verified</h4>
      <p>Your email has been successfully verified.</p>
      <Link href='/auth/login'>Back to Login</Link>
    </div>
  );
};

export default VerificationForm;
