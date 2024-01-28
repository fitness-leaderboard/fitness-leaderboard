import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Login/Signup/SignupPage';
import LoginPage from './pages/Login/Signup/LoginPage';
import VerificationPage from './pages/Login/Signup/VerificationPage';
import PasswordPage from './pages/Login/Signup/PasswordPage';
import NoPage from './pages/NoPage';
import HomePage from './pages/HomePage';
import EmailSignupPage from './pages/Login/Signup/EmailSignupPage';
import NewSignupPage from './pages/Login/Signup/NewSignupPage';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='emailsignup'>
          <Route index element={<EmailSignupPage />} />
          <Route path='newsignup' element={<NewSignupPage />} />
          <Route path='verification' element={<VerificationPage />} />
          <Route path='password' element={<PasswordPage />} />
        </Route>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<NoPage />} />{' '}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
