
//import Interface from '/home/e20210010618/my-app/src/pages/Interface.js'
// server.js

const express = require('express');
const http = require('http');
//const socketIO = require('socket.io');
//const gameController = require('/home/e20210010618/my-app/server/controllers/gameController.js');
const userController = require('/home/e20210010618/my-app/server/controllers/userController.js');

const app = express();
const server = http.createServer(app);
//const io = socketIO(server);
//const jwt = require('jsonwebtoken');
//const { default: ConnectionPage } = require('./pages/ConnectionPage');
//const { Interface } = require('readline');

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Endpoint pour la création d'un utilisateur (inscription)
app.post('/api/signup', async (req, res) => {
  try {
    const result = await userController.signup(req.body);
    res.json(result);
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
});

// Endpoint pour d'autres opérations liées au jeu ou aux utilisateurs...

// Démarrage du serveur
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
