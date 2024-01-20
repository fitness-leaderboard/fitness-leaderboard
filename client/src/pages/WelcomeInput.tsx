import React from 'react';
import {
  Input,
  LoginButton,
  InputHeader,
  InputWrapper,
  LeftColumn,
  SignupButton,
  SignupText,
  TwoColumns,
} from './LoginPageStyles';

export default function WelcomeInput() {
  return (
    <TwoColumns>
      <LeftColumn>
        <img src='/neulogo.png' width={300} alt='Northeastern University Logo' />
      </LeftColumn>
      <InputWrapper>
        <InputHeader>Welcome To Leaderboards!</InputHeader>
        <Input type='text' placeholder='NEU Email'></Input>
        <Input type='password' placeholder='Password'></Input>
        <LoginButton>Login</LoginButton>
        <SignupText>
          Don't have an account? <SignupButton>Sign up</SignupButton>
        </SignupText>
      </InputWrapper>
    </TwoColumns>
  );
}
