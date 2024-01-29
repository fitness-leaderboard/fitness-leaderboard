import React from 'react';
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
} from '../../../styles/LoginPageStyles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../DarkThemeContex';
import { useLocation } from 'react-router-dom';

export default function VerificationPage() {
  const { darkMode } = useTheme();
  const [verificationCode, setVerificationCode] = React.useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state.email;

  const handleConfirmClick = () => {
    if (isValidCode(verificationCode)) {
      navigate('/');
    } else {
      console.error('Invalid email address');
    }
  };

  const isValidCode = (code: string) => {
    return code === 'swordfish';
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setVerificationCode(event.target.value);
  };
  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>Enter the verification code sent to your email</MainHeader>
        <InputContainer>
          <InputWrapper>
            <InputLabel darkMode={darkMode}>Email</InputLabel>
            <Input type='text' darkMode={darkMode} value={'jdoe@northeastern.edu'} readOnly />
          </InputWrapper>
          <InputWrapper>
            <InputLabel darkMode={darkMode}>Verification Code</InputLabel>
            <Input
              type='text'
              placeholder='Enter code here'
              darkMode={darkMode}
              value={verificationCode}
              onChange={handleInputChange}></Input>
          </InputWrapper>
          <MainButton onClick={handleConfirmClick}>Confirm</MainButton>
          <SignupText darkMode={darkMode}>
            <SignupButton>Resend Code</SignupButton>
          </SignupText>
        </InputContainer>
      </MainWrapper>
    </Container>
  );
}
