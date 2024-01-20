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

export default function SignupPage() {
  const { darkMode } = useTheme();
  const [email, setEmail] = React.useState('');

  const navigate = useNavigate();

  const handleNextClick = () => {
    if (isValidEmail(email)) {
      navigate('/signup/verification');
    } else {
      console.error('Invalid email address');
    }
  };

  const isValidEmail = (email: string) => {
    return email.includes('@northeastern.edu');
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };
  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>Enter your Northeastern email to begin!</MainHeader>
        <InputContainer>
          <InputWrapper>
            <InputLabel darkMode={darkMode}>Email</InputLabel>
            <Input
              type='text'
              placeholder='doe.j@northeastern.edu'
              darkMode={darkMode}
              value={email}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <MainButton onClick={handleNextClick}>Next</MainButton>
        </InputContainer>
      </MainWrapper>
    </Container>
  );
}
