import React from 'react';
import { Container, MainHeader, MainWrapper } from '../styles/LoginPageStyles';
import { useTheme } from './Login/Signup/DarkThemeContex';

export default function NoPage() {
  const { darkMode } = useTheme();
  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>
          Error 404, Sorry, the page you are looking for does not exist.
        </MainHeader>
      </MainWrapper>
    </Container>
  );
}
