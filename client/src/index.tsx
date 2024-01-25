import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkTheme } from './pages/Login/Signup/DarkThemeContex';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <DarkTheme>
      <App />
    </DarkTheme>
  </React.StrictMode>,
);
