import React from 'react';
import {
  Input,
  LoginButton,
  MainHeader,
  MainWrapper,
  LeftColumn,
  SignupButton,
  SignupText,
  Container,
  RightColumn,
  LogoImage,
  LogoContainer,
  ForgotPasswordButton,
  InputContainer,
  InputWrapper,
  InputLabel,
} from '../../../styles/LoginPageStyles';
import styled from 'styled-components';
import theme from '../../../styles/themes';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const [darkMode, setDarkMode] = React.useState(false);
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

  const handleSignupClick = () => {
    navigate('/signup');
  };
  return (
    <Container>
      <LeftColumn>
        <ToggleButton onClick={() => setDarkMode(!darkMode)}>
          Toggle to {darkMode ? 'light' : 'dark'} mode
        </ToggleButton>
        <LogoContainer>
          <LogoImage src='/neulogo.png' width={250} alt='Leaderboards Logo' />
        </LogoContainer>
      </LeftColumn>
      <RightColumn darkMode={darkMode}>
        <MainWrapper darkMode={darkMode}>
          <MainHeader darkMode={darkMode}>Welcome To Leaderboards!</MainHeader>
          <InputContainer>
            <InputWrapper>
              <InputLabel darkMode={darkMode}>Email</InputLabel>
              <Input type='text' placeholder='doe.j@northeastern.edu' darkMode={darkMode}></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel darkMode={darkMode}>Password</InputLabel>
              <Input type='password' placeholder='abc123' darkMode={darkMode}></Input>
            </InputWrapper>
            <ForgotPasswordButton darkMode={darkMode}>Forgot Password?</ForgotPasswordButton>
            <LoginButton>Login</LoginButton>
            <SignupText darkMode={darkMode}>
              Don't have an account?{' '}
              <SignupButton onClick={handleSignupClick}>Sign up</SignupButton>
            </SignupText>
          </InputContainer>
        </MainWrapper>
      </RightColumn>
    </Container>
  );
}
