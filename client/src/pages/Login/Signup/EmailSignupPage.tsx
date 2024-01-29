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
  Form,
} from '../../../styles/LoginPageStyles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './DarkThemeContex';
import axios from 'axios';

export default function EmailSignupPage() {
  const { darkMode } = useTheme();
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Check the email format
      const response = await axios.get(`http://localhost:8080/validEmailFormat?email=${email}`);
      if (response.status === 200) {
        const postUserResponse = await axios.post('http://localhost:8080/postUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });
        if (postUserResponse.status === 200) {
          // Handle success if needed
          navigate('/emailsignup/newsignup', { state: { email: email } });
        } else if (postUserResponse.status === 404) {
          // Handle error if needed
          const errorData = await postUserResponse.statusText;
          setError(`Error posting user data: ${errorData.message}`);
        }
      } else {
        setError('Invalid email address');
      }
    } catch (error) {
      setError(`lol ${error.message}`);
    }
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
    console.log(email);
  };

  return (
    <Container darkMode={darkMode}>
      <MainWrapper darkMode={darkMode}>
        <MainHeader darkMode={darkMode}>Enter your Northeastern email to begin!</MainHeader>

        <InputContainer>
          <Form
            onSubmit={handleSubmit}
            method='get'
            action={`http://localhost:8080/validEmailFormat`}>
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
            {error && <SubTextLabel darkMode={darkMode}>{error}</SubTextLabel>}
            <MainButton type={'submit'}>Next</MainButton>
          </Form>
        </InputContainer>
      </MainWrapper>
    </Container>
  );
}
