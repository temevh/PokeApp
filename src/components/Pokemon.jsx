import React, { useState, useEffect } from "react";
import "./Pokemon.css"

const Pokemon = ({pokeName}) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [pokeName]);

  return (
    <div id="infodiv">
      <div id="namediv">
          <p>Name: {pokemon.name}</p>
      </div>
      <div id="weightdiv">
          <p>HP: {pokemon.height}</p>
      </div>
      <div id="heightdiv">
          <p>Attack: {pokemon.height}</p>
      </div>
      <div id="abilitiesdiv">
          <p>
          Abilities:{" "}
          {pokemon.abilities &&
          pokemon.abilities.map((ability) => ability.ability.name).join("\n")}
          </p>
      </div>

    </div>
  );
};

export default Pokemon;
