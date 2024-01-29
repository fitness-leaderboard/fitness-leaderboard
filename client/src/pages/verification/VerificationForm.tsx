import React, { useEffect } from 'react';
import {
  InformativeBox,
  Form,
  Input,
  InputContainer,
  InputLabel,
  InputWrapper,
  MainButton,
  VerificationButton,
} from '../../styles/LoginPageStyles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../props/DarkThemeContex';
import CheckIcon from '../../icons/CheckIcon';
import XIcon from '../../icons/XIcon';

function VerificationForm() {
  const { darkMode } = useTheme();
  const [verificationCode, setVerificationCode] = React.useState('');
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.state === null || location.state === undefined) {
      navigate('/signup');
    } else {
      setEmail(location.state.email);
    }
  }, [location.state, navigate]);

  const handleSubmitVerification = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (isValidCode(verificationCode)) {
      navigate('/');
    } else {
      console.error('Invalid email address');
    }
  };

  const isValidCode = (code: string) => {
    return code === 'swordfish';
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setVerificationCode(event.target.value);
  };
  return (
    <Form action='#' method='post' onSubmit={handleSubmitVerification}>
      <InputContainer>
        <InputWrapper>
          <Input type='text' darkMode={darkMode} value={email} readOnly />
          <InformativeBox>
            <CheckIcon width={36} height={36} />
          </InformativeBox>
        </InputWrapper>
        <InputWrapper>
          <Input
            type='text'
            placeholder='Enter code here'
            darkMode={darkMode}
            value={verificationCode}
            onChange={handleInputChange}
          />
          <InformativeBox>
            <CheckIcon width={36} height={36} />
          </InformativeBox>
        </InputWrapper>
        <VerificationButton type='submit'>Confirm</VerificationButton>
      </InputContainer>
    </Form>
  );
}

export default VerificationForm;
