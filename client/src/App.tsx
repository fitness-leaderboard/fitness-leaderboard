import React from 'react';
import './App.css';
// import LoginPage from './pages/LoginPage';
import VerificationPage from './pages/VerificationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import NoPage from './pages/NoPage';
import SignupPage from './pages/SignupPage';
import PasswordPage from './pages/PasswordPage';

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
