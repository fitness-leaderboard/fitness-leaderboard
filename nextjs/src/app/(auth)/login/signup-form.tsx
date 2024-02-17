import React from 'react';
import jwt from 'jsonwebtoken';

const SignupForm = () => {
  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitSignin = async (event: any) => {
    event.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const status = response.status;
      const data = await response.json();

      if (status === 401) {
        setError(data);
        return;
      }

      if (data.jwtToken) {
        localStorage.setItem('token', data.jwtToken);
      } else {
        setError(data);
      }

      console.log('data:', data, localStorage.getItem('token'));
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <form action='#' method='post' onSubmit={handleSubmitSignin}>
      <div>
        <div>
          <input
            type='text'
            placeholder='Northeastern Email'
            name='email'
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <button type='submit'>Login</button>
        <div>{error}</div>
      </div>
    </form>
  );
};

export default SignupForm;
