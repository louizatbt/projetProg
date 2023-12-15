// src/components/SignupForm.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSignup = (e) => {
    
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    // Ajoutez ici la logique pour envoyer les informations d'inscription au serveur
    onSignup({ username, password });
  };
  const SendIt_= () =>{

    console.log('hello je suis ici');
    navigate('/Interface');
    return null;
  }

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSignup}>
        <label>
          Nom d'utilisateur:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br /> <br />
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br /> <br />
        <label>
          Confirmez le mot de passe:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br /> <br />
        <button onClick={SendIt_}>S'inscrire</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
