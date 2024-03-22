'use client'
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { newVerification } from '@/actions/NewValidation';
import { useSearchParams } from 'next/navigation';

const VerificationPage: React.FC = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token)  {
      setError('Missing token!');
      return;
    }

    newVerification(token)
      .then(data => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div>
      <h4>Email Verified</h4>
      <p>Your email has been successfully verified.</p>
      <Link href='/auth/login'>
        Back to Login
      </Link>
    </div>
  );
};

export default VerificationPage;
