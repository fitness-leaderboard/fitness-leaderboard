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
} from './LoginPageStyles';
import styled from 'styled-components';
import theme from '../styles/themes';
import { useNavigate } from 'react-router-dom';

export default function VerificationPage() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');
  const ToggleButton = styled.button`
    width: 200px;
    padding: 10px;
    background-color: ${darkMode ? theme.colors.neuWhite : theme.colors.neuBlack};
    color: ${darkMode ? theme.colors.neuBlack : theme.colors.neuWhite};
    border: none;
    border-radius: 20px;
    cursor: pointer;
  `;
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    if (isValidCode(verificationCode)) {
      navigate('/signup/password');
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
    <Container>
      <MainWrapper>
        <MainHeader darkMode={darkMode}>Enter the verification code sent to your email</MainHeader>
        <InputContainer>
          <h3>Email: jdoe@northeastern.edu</h3>
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
