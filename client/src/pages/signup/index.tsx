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
  SignupButton,
  SignupText,
  SubTextLabel,
} from '../../styles/LoginPageStyles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../props/DarkThemeContex';
import SignupForm from './SignupForm';

export default function SignupPage() {
  const { darkMode } = useTheme();

  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('/login');
  };

  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>Sign up!</MainHeader>
        <SignupForm />
        <SignupText darkMode={darkMode}>
          Have an account? <SignupButton onClick={handleSigninClick}>Sign in</SignupButton>
        </SignupText>
      </MainWrapper>
    </Container>
  );
}
