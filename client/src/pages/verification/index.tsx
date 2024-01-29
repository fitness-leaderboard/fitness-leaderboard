import React, { useEffect } from 'react';
import {
  Input,
  MainHeader,
  MainWrapper,
  SignupButton,
  SignupText,
  Container,
  InputContainer,
  InputWrapper,
  InputLabel,
  MainButton,
} from '../../styles/LoginPageStyles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../props/DarkThemeContex';
import { useLocation } from 'react-router-dom';
import VerificationForm from './VerificationForm';

export default function VerificationPage() {
  const { darkMode } = useTheme();
  const [verificationCode, setVerificationCode] = React.useState('');
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.state === null || location.state === undefined) {
      navigate('/signup');
    } else {
      setEmail(location.state.email);
    }
  }, [location.state, navigate]);

  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>Enter Verification Code</MainHeader>
        <VerificationForm />
        <SignupText darkMode={darkMode}>
          <SignupButton>Resend Code</SignupButton>
        </SignupText>
      </MainWrapper>
    </Container>
  );
}
