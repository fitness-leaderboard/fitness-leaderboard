import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Login/Signup/SignupPage';
import LoginPage from './pages/Login/LoginPage';
import VerificationPage from './pages/Login/Signup/VerificationPage';
import NoPage from './pages/NoPage';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='signup'>
          <Route index element={<SignupPage />} />
          <Route path='verification' element={<VerificationPage />} />
        </Route>
        <Route path='*' element={<NoPage />} />{' '}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
