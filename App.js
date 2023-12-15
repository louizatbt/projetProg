import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import ConnectionPage from './pages/ConnectionPage';
import Card from './Card';
import Deck from './Deck';
import './app.css';
import Interface from '/home/e20210010618/my-app/src/pages/Interface.js';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={< SignupForm/>} />
        <Route path="/" element={<Home />}/>
        <Route path="/Interface" element={<Interface/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [gameState, setGameState] = useState(null);
  const navigate = useNavigate();

  const startGame = async () => {
    try {
      // Effectuer une requête à votre API pour obtenir l'état initial du jeu
      const response = await fetch('/api/game/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Ajouter d'autres en-têtes nécessaires, par exemple, un jeton d'authentification
        },
        // Ajouter le corps de la requête si nécessaire
        // body: JSON.stringify({ /* données supplémentaires si nécessaire */ }),
      });

      if (!response.ok) {
        throw new Error('Échec de la requête');
      }

      // Analyser la réponse JSON
      const initialState = await response.json();

      // Mettre à jour l'état du jeu avec setGameState
      setGameState(initialState);

      // Rediriger l'utilisateur vers la page d'inscription
      navigate('/connection');
    } catch (error) {
      console.error('Erreur lors du démarrage du jeu :', error);
      // Gérer l'erreur, par exemple, afficher un message à l'utilisateur
    }
  };




  return (
    <div className="App">
     
      {
      /* <header className="App-header">
        <div className="App-title">Jeu de cartes</div>
        {gameState && <Card suit={gameState.card.suit} rank={gameState.card.rank} />}
        <Deck />
        <button onClick={startGame}>Commencer le jeu</button>
      </header> */
      }
      
      <div>
        <ConnectionPage/>
      </div>

    </div>

  );

  return 0;


}

export default App;
