import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Dhoni", score: 91 },
    { name: "Hardik", score: 65 },
    { name: "Jadeja", score: 70 },
    { name: "Ashwin", score: 60 },
    { name: "Shami", score: 85 },
    { name: "Bumrah", score: 78 },
    { name: "Pant", score: 67 },
    { name: "KL Rahul", score: 75 },
    { name: "Gill", score: 50 },
  ];

  const filtered = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
      <h3>Filtered Players (Score &lt; 70)</h3>
      {filtered.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
