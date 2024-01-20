import styled from 'styled-components';
import theme from '../styles/themes';
import DarkThemeProps from './DarkTheme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto; /* Center the content */
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${theme.colors.neuRed};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.sm};
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 350px;
`;

export const RightColumn = styled.div<DarkThemeProps>`
  flex: 0 0 40%;
  padding: 20px;
  background-color: ${props => (props.darkMode ? theme.colors.neuDarkGray : theme.colors.neuWhite)};
  min-width: 400px;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 0;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export const FormHeader = styled.h1<DarkThemeProps>`
  font-family: ${theme.fonts.primary};
  color: ${props => (props.darkMode ? theme.colors.neuWhite : theme.colors.neuBlack)};
  font-size: ${theme.fontSizes.heading};
  font-weight: bold;
  margin: 5px;
  display: inline-block;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputLabel = styled.label<DarkThemeProps>`
  align-self: flex-start;
  font-family: ${theme.fonts.primary};
  font-size: 12px;
  color: ${props => (props.darkMode ? theme.colors.neuWhite : theme.colors.neuBlack)};
  margin-top: ${theme.spacing.sm};
  margin-bottom: 3px;
`;

export const Input = styled.input<DarkThemeProps>`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.base};
  color: ${props => (props.darkMode ? theme.colors.neuWhite : theme.colors.neuBlack)};
  background-color: transparent;
  border: none;
  outline: 1px solid ${theme.colors.neuRed};
  border-radius: 10px;
  width: 100%;
  max-width: 250px;
  padding: 6px;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid ${theme.colors.neuBrightRed};
  }
`;

export const ForgotPasswordButton = styled.button<DarkThemeProps>`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.sm};
  color: ${props => (props.darkMode ? theme.colors.neuWhite : theme.colors.neuBlack)};
  margin: 10px 0 9px 0;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.subHeading};
  color: ${theme.colors.neuWhite};
  background-color: ${theme.colors.neuRed};
  border: none;
  border-radius: 10px;
  width: 100%;
  max-width: 250px;
  height: 32px;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  &:hover {
    background-color: ${theme.colors.neuBrightRed};
    color: ${theme.colors.neuWhite};
  }
`;

export const SignupText = styled.p<DarkThemeProps>`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.sm};
  color: ${props => (props.darkMode ? theme.colors.neuWhite : theme.colors.neuBlack)};
  margin-top: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  align-self: center;
  text-align: center;
`;

export const SignupButton = styled.button`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.neuRed};
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${theme.colors.neuBrightRed};
  }
`;
