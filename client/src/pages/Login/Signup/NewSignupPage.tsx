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
} from '../../../styles/LoginPageStyles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './DarkThemeContex';
import { useLocation } from 'react-router-dom';

export default function NewSignupPage() {
  const { darkMode } = useTheme();
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const location = useLocation();
  const email = location.state.email;

  const navigate = useNavigate();

  const passwordsMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const isValidPassword = (password: string) => {
    // Minimum eight characters, at least one letter, one number and one special character
    //const validPasswordRegex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
    const validPasswordRegex = ".{8,}";
    return password.match(validPasswordRegex) !== null;
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(event.target.value);
  };

  const handleConfPwChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setConfirmPassword(event.target.value);
  };

  const handleNextClick = () => {
    if (
      passwordsMatch(password, confirmPassword) &&
      isValidPassword(password)
    ) {
      fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email as string,
          password: password,
        }),
      })
      .then(data => {
        console.log(data);
        navigate('/emailsignup/verification', { state: { email: email } });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      console.log(`Invalid password, ${password}`);
    }
  };

  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
      <MainHeader darkMode={darkMode}>{email}</MainHeader>
        <InputContainer>
          <InputWrapper>
            <InputLabel darkMode={darkMode}>Password</InputLabel>
            <Input
              type='password'
              placeholder='password'
              darkMode={darkMode}
              value={password}
              onChange={handlePasswordChange}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel darkMode={darkMode}>Confirm Password</InputLabel>
            <Input
              type='password'
              placeholder='confirm password'
              darkMode={darkMode}
              value={confirmPassword}
              onChange={handleConfPwChange}
            />
          </InputWrapper>
          <MainButton onClick={handleNextClick}>Register</MainButton>
        </InputContainer>
      </MainWrapper>
    </Container>
  );
}
