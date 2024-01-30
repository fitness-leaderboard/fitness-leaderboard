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
import { sendVerificationEmail, validateEmailFormat } from '../../api/email.api'

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

  const isValidPassword = (password: string) : Boolean => {
    // Must be at least 8-20 characters containing lowercase, uppercase, number, and symbol
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    return passwordRegex.test(password)
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(event.target.value);
  };

  const handleConfPwChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmitSignUp = async (event: any) => {
    event.preventDefault();
    try {
      if(!isValidPassword(password)) {
        setError('Password must be at least 8-20 characters containing lowercase, uppercase, number, and symbol');
        return
      }
      if(!passwordsMatch(password, confirmPassword)) {
        setError('Passwords do not match');
        return;
      }
      const response = await validateEmailFormat(email);
      if(response.ok) {
        await sendVerificationEmail(email);
      }
      navigate('/signup/verification', { state: { email: email } });
    } catch (error) {
      setError((error as Error).message);
    }
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
        <SubTextLabel darkMode={darkMode}>
          <p>{error}</p>
        </SubTextLabel>
        <MainButton type='submit'>Next</MainButton>
      </InputContainer>
    </Form>
  );
}

export default SignupForm;
