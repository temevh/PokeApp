import './App.css';
import React from 'react';
import { useState } from 'react';
import Pokemon from './components/Pokemon';

function App() {
  const [pokeName, setPokeName] = useState("pikachu");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(pokeName);
  };

  return (
    <div className='App'>
      <header>
        <h1>POKEAPP</h1>
      </header>
      <form onSubmit={handleSubmit} id="searchForm">
        <label htmlFor="pokemon-input"></label>
        <div className="input-group">
          <input
            id="pokemon-input"
            type="text"
            value={pokeName}
            onChange={(event) => setPokeName(event.target.value)}
          />
        </div>
      </form>
      <Pokemon pokeName={pokeName} />
    </div>
  );
}

export default App;
