import React from 'react';

const IndianPlayers = () => {
  const T20Players = ["Virat", "Rohit", "SKY", "Hardik"];
  const RanjiPlayers = ["Pujara", "Rahane", "Jadeja", "Ashwin"];

  // Destructuring
  const [odd1, even1, odd2, even2] = T20Players;

  // Merging
  const allPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd & Even Players (Destructured)</h2>
      <p>Odd Players: {odd1}, {odd2}</p>
      <p>Even Players: {even1}, {even2}</p>

      <h2>Merged Players</h2>
      {allPlayers.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
};

export default IndianPlayers;
