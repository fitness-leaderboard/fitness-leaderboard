import styled from 'styled-components';
import theme from '../styles/themes';

const darkMode = true;

export const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${darkMode ? theme.colors.neuDarkGray : theme.colors.neuWhite};
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;

  & > div {
    flex: 1;

    &:first-child {
      flex: 0 0 60%;
      background-color: ${theme.colors.neuRed};
    }

    &:last-child {
      flex: 0 0 40%;
      position: relative;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: ${darkMode ? theme.colors.neuDarkGray : theme.colors.neuWhite};
  min-height: 100vh;
  width: 100%;
`;

export const InputHeader = styled.h1`
  font-family: ${theme.fonts.primary};
  color: ${darkMode ? theme.colors.neuWhite : theme.colors.neuBlack};
  font-size: ${theme.fontSizes.heading};
  font-weight: bold;
  margin: 5px;
  display: inline-block;
  text-align: center;
`;

export const Input = styled.input`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.subHeading};
  color: ${darkMode ? theme.colors.neuWhite : theme.colors.neuBlack};
  background-color: transparent;
  border: 1px solid ${theme.colors.neuRed};
  border-radius: 10px;
  width: 85%;
  max-width: 250px;
  padding: 10px;
  margin-top: ${theme.spacing.sm};
  transition: all 0.2s ease-in-out;

  &:focus {
    border: 1px solid ${theme.colors.neuRed};
  }
`;

export const LoginButton = styled.button`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.subHeading};
  color: ${theme.colors.neuWhite};
  background-color: ${theme.colors.neuRed};
  border: none;
  border-radius: 10px;
  width: 85%;
  max-width: 250px;
  padding: ${theme.spacing.sm};
  margin-top: ${theme.spacing.sm};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: ${theme.colors.neuBrightRed};
    color: ${theme.colors.neuWhite};
  }
`;

export const SignupText = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.sm};
  color: ${darkMode ? theme.colors.neuWhite : theme.colors.neuBlack};
  margin-top: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
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

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: ${darkMode ? theme.colors.neuDarkGray : theme.colors.neuWhite};
  min-height: 100vh;
  width: 100%;
`;
