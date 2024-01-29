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
  SubTextLabel,
} from '../../../styles/LoginPageStyles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './DarkThemeContex';
import axios from 'axios';

export default function EmailSignupPage() {
  const { darkMode } = useTheme();
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  const handleNextClick = async () => {
    await fetch(`http://localhost:8080/validEmailFormat?email=${email}`)
      .then(response => {
        if (response.status === 200) {
          navigate('/emailsignup/newsignup', { state: { email: email } });
        }
      })
      .catch(error => {
        setError(error.message);
      });
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
          <SubTextLabel darkMode={darkMode}>{error && <p>{error}</p>}</SubTextLabel>
          <MainButton onClick={handleNextClick}>Next</MainButton>
        </InputContainer>
      </MainWrapper>
    </Container>
  );
}
