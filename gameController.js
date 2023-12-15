// controllers/gameController.js
const setupGameEvents = (socket, io) => {
    socket.on('startGame', () => {
      // Logique de démarrage du jeu
      const gameState = { /* Votre état initial du jeu ici */ };
      io.emit('gameState', gameState);
    });
  
    // Ajoutez d'autres gestionnaires d'événements liés au jeu ici
  };
  
  module.exports = {
    setupGameEvents,
  };
  