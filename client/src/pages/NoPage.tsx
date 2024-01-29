import React from 'react';
import { Container, MainHeader, MainWrapper } from '../styles/LoginPageStyles';
import { useTheme } from './login/DarkThemeContex';
import { Link } from 'react-router-dom';

export default function NoPage() {
  const { darkMode } = useTheme();
  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>
          Error 404, Sorry, the page you are looking for does not exist. Try going to{' '}
          <Link to='/'>Login</Link>
        </MainHeader>
      </MainWrapper>
    </Container>
  );
}
