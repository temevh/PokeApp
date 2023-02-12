import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon';

function App() {
  const [pokeName, setPokeName] = useState("ditto");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(pokeName)
    // Call the Pokemon component with the updated pokeName
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon-input">Enter Pokemon name:</label>
        <input
          id="pokemon-input"
          type="text"
          value={pokeName}
          onChange={(event) => setPokeName(event.target.value)}
        />
        <button type="submit">Get Pokemon Info</button>
      </form>
      <Pokemon pokeName={pokeName} />
    </div>
  );
}

export default App;