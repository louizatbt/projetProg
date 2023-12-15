//Important:
//Desormais on peux manipuler les routes.
//Pour manipuler les route on les met tout dans App.js
//pour utiliser sa on doit declerer useNavigate dans la premier fonction qui esr exporter ensuite on peux l'utiliser par tout .


// ConnectionPage.js
import React, { useState } from 'react';
import socket from '/home/e20210010618/my-app/src/socket.js';
import SignupForm from '../components/SignupForm';
import Interface from '/home/e20210010618/my-app/src/pages/Interface.js'

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


const ConnectionPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {

    // ... logique de connexion existante
     // Émettre un événement au serveur pour gérer l'inscription
     fetch('http://localhost:8088/Interface/').then(response => response.json()).then(data => {
    // Utilisez la valeur récupérée, par exemple, en l'assignant à la variable "longueur"
      const longueur = data;
      console.log(longueur);
    }).catch(error => console.error('Erreur de requête :', error));
     
     //userData
     socket.emit('signup',{}, (response) => {
      if (response.success) {
        // Gérer la réussite de l'inscription
        console.log('Inscription réussie');
        // Rediriger vers la page principale ou faire toute autre action nécessaire
        // window.location.href = '/Interface';
      } else {
        setError(response.message || 'Erreur d\'inscription');
      }
    });
  };

  

  const handleSignup = (userData) => {
    // Émettre un événement au serveur pour gérer l'inscription

    socket.emit('signup', userData, (response) => {
      if (response.success) {
        // Gérer la réussite de l'inscription
        console.log('Inscription réussie');
        // Rediriger vers la page principale ou faire toute autre action nécessaire
        // window.location.href = '/Interface';
      } else {
        setError(response.message || 'Erreur d\'inscription');
      }
    });
  };

  const Envoie_ = () =>{

    console.log('hello je suis ici');
    navigate('/Interface');
    return null;
  }
  const Sendd_= () =>{

    console.log('hello je suis ici');
    navigate('/SignUp');
    return null;
  }
  return (
    <div>
      <h2>Page de Connexion</h2>
      {/* <SignupForm onSignup={handleSignup} /> */}
      {/* Le reste du code de votre page de connexion */}
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />  
      <br />   
      <br /> 
      <input
        type="text"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> 
      <br />
      {/* <button onClick={handleLogin}>Se connecter</button> */}
      <button onClick={Envoie_} >Se connecter</button>
      <br /><br />
      <button onClick={Sendd_} >
          Inscription
      </button>

      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ConnectionPage;
