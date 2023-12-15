// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyButton() {
  return (
    <button style={{ display: 'block', margin: 'auto' }}>
      I'm a button
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* Commentez ou retirez la ligne suivante pour supprimer le bouton */}
    {/* <MyButton /> */}
  </React.StrictMode>
);

// Le reste de votre code WebVitals...
reportWebVitals();
