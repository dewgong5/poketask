import React, { useState } from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics/>
  </React.StrictMode>
);
