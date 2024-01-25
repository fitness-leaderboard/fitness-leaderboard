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

export default function PasswordPage() {
  const { darkMode } = useTheme();
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const navigate = useNavigate();

  const handleNextClick = () => {
    if (passwordsMatch(password, confirmPassword) && isValidPassword(password)) {
      navigate('/homepage');
    } else {
      /**
       * Show real error based on if passwords don't match or if password is invalid. Better yet,
       * don't allow confirm to be pressed unless passwords match and are valid, and constantly check. Will talk abt this in meeting
       */
      console.error('Error setting password');
    }
  };

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
  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>Almost there! Set your password to begin</MainHeader>
        <InputContainer>
          <h3>Email: jdoe@northeastern.edu</h3>
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
          <MainButton onClick={handleNextClick}>Next</MainButton>
        </InputContainer>
      </MainWrapper>
    </Container>
  );
}
