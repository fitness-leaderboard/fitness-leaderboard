import React from 'react';
import {
  InformativeBox,
  ForgotPasswordButton,
  Form,
  Input,
  InputContainer,
  InputWrapper,
  LoginButton,
} from '../../styles/LoginPageStyles';
import { useTheme } from '../../props/DarkThemeContex';
import axios from 'axios';
import CheckIcon from '../../icons/CheckIcon';
import XIcon from '../../icons/XIcon';

function LoginForm() {
  const handleSubmitLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const login = await axios.post('http://localhost:8080/login');
    } catch {
      console.log('error');
    }
  };

  const { darkMode } = useTheme();
  return (
    <Form action='#' method='post' onSubmit={handleSubmitLogin}>
      <InputContainer>
        <InputWrapper>
          <Input type='text' placeholder='Northeastern Email' darkMode={darkMode}></Input>
          <InformativeBox>
            <CheckIcon width={36} height={36} />
          </InformativeBox>
        </InputWrapper>
        <InputWrapper>
          <Input type='password' placeholder='Password' darkMode={darkMode}></Input>
          <InformativeBox>
            <XIcon width={36} height={36} />
          </InformativeBox>
        </InputWrapper>
        <ForgotPasswordButton darkMode={darkMode}>Forgot Password?</ForgotPasswordButton>
        <LoginButton type='submit'>Login</LoginButton>
      </InputContainer>
    </Form>
  );
}

export default LoginForm;
