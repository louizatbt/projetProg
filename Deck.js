// Deck.js
import React from 'react';
import Card from './Card';
import './app.css'; // Importez les styles du deck

const Deck = () => {
  // Exemple de données de cartes
  const cards = [
    { suit: 'Hearts', rank: 'A' },
    { suit: 'Diamonds', rank: '2' },
    { suit: 'Clubs', rank: '3' },
    { suit: 'Spades', rank: '4' },
    { suit: 'Hearts', rank: '5' },
    { suit: 'Diamonds', rank: '6' },
    { suit: 'Clubs', rank: '7' },
    { suit: 'Spades', rank: '8' },
    { suit: 'Hearts', rank: '9' },
    { suit: 'Diamonds', rank: '10' },
    { suit: 'Clubs', rank: 'J' },
    { suit: 'Spades', rank: 'Q' },
    { suit: 'Hearts', rank: 'K' },
  ];

  // Divisez les cartes en sous-tableaux de 3 éléments
  const chunkedCards = Array.from({ length: Math.ceil(cards.length / 3) }, (_, index) =>
    cards.slice(index * 3, index * 3 + 3)
  );

  return (
    <div className="deck">
      {chunkedCards.map((row, rowIndex) => (
        <div key={rowIndex} className="card-row">
          {row.map((card, index) => (
            <Card key={index} suit={card.suit} rank={card.rank} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Deck;
