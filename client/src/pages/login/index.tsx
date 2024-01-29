import React from 'react';
import {
  MainHeader,
  MainWrapper,
  LeftColumn,
  SignupButton,
  SignupText,
  Container,
  RightColumn,
  LogoImage,
  LogoContainer,
} from '../../styles/LoginPageStyles';
import styled from 'styled-components';
import theme from '../../styles/themes';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../props/DarkThemeContex';
import LoginForm from './LoginForm';

export default function LoginPage() {
  const { darkMode, toggleDarkMode } = useTheme();
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
        <ToggleButton onClick={toggleDarkMode}>
          Toggle to {darkMode ? 'light' : 'dark'} mode
        </ToggleButton>
        <LogoContainer>
          <LogoImage src='/buff-husky.png' width={250} alt='Leaderboards Logo' />
        </LogoContainer>
      </LeftColumn>
      <RightColumn darkMode={darkMode}>
        <MainWrapper darkMode={darkMode}>
          <MainHeader darkMode={darkMode}>Welcome To Leaderboards!</MainHeader>
          <LoginForm />
          <SignupText darkMode={darkMode}>
            Don't have an account? <SignupButton onClick={handleSignupClick}>Sign up</SignupButton>
          </SignupText>
        </MainWrapper>
      </RightColumn>
    </Container>
  );
}
