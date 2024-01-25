import React from 'react';
import { Container, MainHeader, MainWrapper } from '../styles/LoginPageStyles';

export default function NoPage() {
  return (
    <Container>
      <MainWrapper>
        <MainHeader>Sorry, the page you are looking for does not exist.</MainHeader>
      </MainWrapper>
    </Container>
  );
}
