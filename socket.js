import { io } from 'socket.io-client';

// Remplacez 'http://localhost:3001' par l'URL de votre serveur WebSocket
const socket = io('http://localhost:3001', {
  query: { token: 'votre_token' }, // Ajoutez votre logique d'authentification ici
});

export default socket;
