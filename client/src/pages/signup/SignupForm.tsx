import React from 'react';
import {
  InformativeBox,
  Form,
  Input,
  InputContainer,
  InputWrapper,
  MainButton,
  SubTextLabel,
} from '../../styles/LoginPageStyles';
import { useTheme } from '../../props/DarkThemeContex';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '../../icons/CheckIcon';
import XIcon from '../../icons/XIcon';
import axios from 'axios';

function SignupForm() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  // const passwordsMatch = (password: string, confirmPassword: string) => {
  //   return password === confirmPassword;
  // };

  // const isValidPassword = (password: string) => {
  //   /* Exhaust password validation rules and show what users need for a good password
  //   Also try to allow google to make password?*/
  //   return password.length >= 8 && password.length <= 20;
  // };

  const handleSubmitSignUp = async (event: any) => {
    event.preventDefault();
    // await fetch(`http://localhost:8080/validEmailFormat?email=${email}`)
    //   .then(response => {
    //     if (response.status === 200) {
    //       if (passwordsMatch(password, confirmPassword) && isValidPassword(password)) {
    //         navigate('/signup/verification', { state: { email: email } });
    //       }
    //     } else if (response.status === 400) {
    //       setError('Invalid email format');
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    } else {
      try {
        const body = { email, password };
        const response = await fetch('http://localhost:8080/register', {
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

        console.log('Status:', status);
        console.log('Data:', data);

        if (data.jwtToken) {
          localStorage.setItem('token', data.jwtToken);
        } else {
          setError(data);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    }
  };

  return (
    <Form action='#' method='post' onSubmit={handleSubmitSignUp}>
      <InputContainer>
        <InputWrapper>
          <Input
            type='text'
            placeholder='Northeastern Email'
            darkMode={darkMode}
            value={email}
            onChange={onEmailChange}
          />
          <InformativeBox>
            {error && <XIcon width={36} height={36} />}
            {/* {error && <SubTextLabel darkMode={darkMode}>{error}</SubTextLabel>} */}
          </InformativeBox>
        </InputWrapper>
        <InputWrapper>
          <Input
            type='password'
            placeholder='Password'
            darkMode={darkMode}
            value={password}
            onChange={onPasswordChange}
          />
          <InformativeBox>
            <XIcon width={36} height={36} />
          </InformativeBox>
        </InputWrapper>
        <InputWrapper>
          <Input
            type='password'
            placeholder='Confirm Password'
            darkMode={darkMode}
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
          <InformativeBox>
            <CheckIcon width={36} height={36} />
          </InformativeBox>
        </InputWrapper>
        <MainButton type='submit'>Next</MainButton>
      </InputContainer>
    </Form>
  );
}

export default SignupForm;
