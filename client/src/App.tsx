import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Login/Signup/SignupPage';
import WelcomePage from './pages/Login/Signup/WelcomePage';
import VerificationPage from './pages/Login/Signup/VerificationPage';
import PasswordPage from './pages/Login/Signup/PasswordPage';
import NoPage from './pages/NoPage';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='signup'>
          <Route index element={<SignupPage />} />
          <Route path='verification' element={<VerificationPage />} />
          <Route path='password' element={<PasswordPage />} />
        </Route>
        <Route path='*' element={<NoPage />} />{' '}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
