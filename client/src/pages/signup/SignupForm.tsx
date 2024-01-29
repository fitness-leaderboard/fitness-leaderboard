import React from 'react';
import {
  InformativeBox,
  Form,
  Input,
  InputContainer,
  InputWrapper,
  MainButton,
  SubTextLabel,
} from '../../styles/LoginPageStyles';
import { useTheme } from '../../props/DarkThemeContex';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '../../icons/CheckIcon';
import XIcon from '../../icons/XIcon';

function SignupForm() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const passwordsMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const isValidPassword = (password: string) => {
    /* Exhaust password validation rules and show what users need for a good password
    Also try to allow google to make password?*/
    return password.length >= 8 && password.length <= 20;
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(event.target.value);
  };

  const handleConfPwChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmitSignUp = async (event: any) => {
    event.preventDefault();
    await fetch(`http://localhost:8080/validEmailFormat?email=${email}`)
      .then(response => {
        if (response.status === 200) {
          if (passwordsMatch(password, confirmPassword) && isValidPassword(password)) {
            navigate('/signup/verification', { state: { email: email } });
          }
        } else if (response.status === 400) {
          setError('Invalid email format');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };
  return (
    <Form action='#' method='post' onSubmit={handleSubmitSignUp}>
      <InputContainer>
        <InputWrapper>
          <Input
            type='text'
            placeholder='Northeastern Email'
            darkMode={darkMode}
            value={email}
            onChange={handleInputChange}
          />
          <InformativeBox>{error && <XIcon width={36} height={36} />}</InformativeBox>
          {/* {error && <SubTextLabel darkMode={darkMode}>{error}</SubTextLabel>} */}
        </InputWrapper>
        <InputWrapper>
          <Input
            type='password'
            placeholder='Password'
            darkMode={darkMode}
            value={password}
            onChange={handlePasswordChange}
          />
          <InformativeBox>
            <XIcon width={36} height={36} />
          </InformativeBox>
        </InputWrapper>
        <InputWrapper>
          <Input
            type='password'
            placeholder='Confirm Password'
            darkMode={darkMode}
            value={confirmPassword}
            onChange={handleConfPwChange}
          />
          <InformativeBox>
            <CheckIcon width={36} height={36} />
          </InformativeBox>
        </InputWrapper>
        <MainButton type='submit'>Next</MainButton>
      </InputContainer>
    </Form>
  );
}

export default SignupForm;
