// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

// Access Google OAuth Client ID from environment variables
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
