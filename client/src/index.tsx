import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { DarkTheme } from './pages/Signup/DarkThemeContex';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <DarkTheme>
      <App />
    </DarkTheme>
  </React.StrictMode>,
);
