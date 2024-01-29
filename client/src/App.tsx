import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signup';
import VerificationPage from './pages/verification';
import NoPage from './pages/nopage/NoPage';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
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
