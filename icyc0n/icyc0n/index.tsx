import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// PERFORMANCE OPTIMIZATION: Import Tailwind CSS (bundled instead of CDN)
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);