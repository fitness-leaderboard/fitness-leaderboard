import React from 'react';
import {
  Container,
  MainWrapper,
  MainHeader,
  InputContainer,
  InputWrapper,
  InputLabel,
  Input,
  MainButton,
  SignupButton,
  SignupText,
  SubTextLabel,
} from '../../styles/LoginPageStyles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../props/DarkThemeContex';

export default function SignupPage() {
  const { darkMode } = useTheme();
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const navigate = useNavigate();

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

  const handleNextClick = async () => {
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
        setError(error.message);
      });
  };

  const handleSigninClick = () => {
    navigate('/login');
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };
  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>Sign up!</MainHeader>
        <InputContainer>
          <InputWrapper>
            <Input
              type='text'
              placeholder='Northeastern Email'
              darkMode={darkMode}
              value={email}
              onChange={handleInputChange}
            />
          </InputWrapper>
          {/* {error && <SubTextLabel darkMode={darkMode}>{error}</SubTextLabel>} */}
          <InputWrapper>
            <Input
              type='password'
              placeholder='Password'
              darkMode={darkMode}
              value={password}
              onChange={handlePasswordChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type='password'
              placeholder='Confirm Password'
              darkMode={darkMode}
              value={confirmPassword}
              onChange={handleConfPwChange}
            />
          </InputWrapper>
          <MainButton onClick={handleNextClick}>Next</MainButton>
          <SignupText darkMode={darkMode}>
            Have an account? <SignupButton onClick={handleSigninClick}>Sign in</SignupButton>
          </SignupText>
        </InputContainer>
      </MainWrapper>
    </Container>
  );
}
