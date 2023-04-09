import React, { useState } from "react";
import './ScoreApp.css'
function ScoreApp() {
  const [players, setPlayers] = useState([]);
  const [additionalPoints, setAdditionalPoints] = useState(0);
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleScoreChange = (id, event) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: parseInt(event.target.value) };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  const handleAdditionalPointsChange = (event) => {
    setAdditionalPoints(parseInt(event.target.value));
  };

  const handleAddPoints = (id) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score + additionalPoints };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  const handleSubtractPoints = (id) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score - additionalPoints };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  const handleAddPlayer = () => {
    const newPlayer = {
      id: Math.floor(Math.random() * 10000),
      name: newPlayerName,
      score: 0,
    };
    setPlayers([...players, newPlayer]);
    setNewPlayerName("");
  };

  const handleRemovePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
  };

  return (
    <div className="scoreapp-container">
      <h1> Sayood Score </h1>
      <div className="players-container">
        {players.map((player) => (
          <div key={player.id} className="player">
            <div className="player-header">
              <h2>{player.name}</h2>
              <button onClick={() => handleRemovePlayer(player.id)}>Remove</button>
            </div>
            <div className="score-input">
              <label htmlFor={`score-${player.id}`}>Enter Score:</label>
              <input
                type="number"
                id={`score-${player.id}`}
                name={`score-${player.id}`}
                value={player.score}
                onChange={(event) => handleScoreChange(player.id, event)}
              />
            </div>
            <div className="additional-points">
              <label htmlFor="additional-points">Additional Points:</label>
              <input
                type="number"
                id="additional-points"
                name="additional-points"
                value={additionalPoints}
                onChange={handleAdditionalPointsChange}
              />
              <div className="center">
              <button className="plus" onClick={() => handleAddPoints(player.id)}>+</button>
              <button className="sub" onClick={() => handleSubtractPoints(player.id)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="new-player-form">
        <input
          type="text"
          placeholder="Enter new player name"
          value={newPlayerName}
          onChange={(event) => setNewPlayerName(event.target.value)}
        />
        <button onClick={handleAddPlayer}>Add player</button>
      </div>
    </div>
  );
}

export default ScoreApp;