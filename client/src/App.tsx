import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Base from './Base';
import Home from './Home';

function App() {
  const handleLogin = async () => {
    window.location.href = 'http://localhost:8080/initiateOAuth';
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
