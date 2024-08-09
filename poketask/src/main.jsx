import React, { useState } from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { inject } from '@vercel/analytics/react';

inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
