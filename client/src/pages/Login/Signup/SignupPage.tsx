import React from 'react';
import {
  Container,
  MainWrapper,
  MainHeader,
  InputContainer,
  InputWrapper,
  InputLabel,
  Input,
  MainButton,
} from '../../../styles/LoginPageStyles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './DarkThemeContex';

export default function SignupPage() {
  const { darkMode } = useTheme();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const navigate = useNavigate();

  const passwordsMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const isValidPassword = (password: string) => {
    /* Exhaust password validation rules and show what users need for a good password
    Also try to allow google to make password?*/
    return password.length >= 8 && password.length <= 20;
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(event.target.value);
  };

  const handleConfPwChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setConfirmPassword(event.target.value);
  };

  const handleNextClick = () => {
    if (
      isValidEmail(email) &&
      passwordsMatch(password, confirmPassword) &&
      isValidPassword(password)
    ) {
      /**
       * Prob will have to be some sort of await here
       */
      navigate('/signup/verification');
    } else {
      console.error('Invalid email address');
    }
  };

  const isValidEmail = (email: string) => {
    return email.includes('@northeastern.edu');
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };
  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>Enter your Northeastern email to begin!</MainHeader>
        <InputContainer>
          <InputWrapper>
            <InputLabel darkMode={darkMode}>Email</InputLabel>
            <Input
              type='text'
              placeholder='doe.j@northeastern.edu'
              darkMode={darkMode}
              value={email}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel darkMode={darkMode}>Password</InputLabel>
            <Input
              type='password'
              placeholder='password'
              darkMode={darkMode}
              value={password}
              onChange={handlePasswordChange}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel darkMode={darkMode}>Confirm Password</InputLabel>
            <Input
              type='password'
              placeholder='confirm password'
              darkMode={darkMode}
              value={confirmPassword}
              onChange={handleConfPwChange}
            />
          </InputWrapper>
          <MainButton onClick={handleNextClick}>Next</MainButton>
        </InputContainer>
      </MainWrapper>
    </Container>
  );
}
