import React, { useState, useEffect } from "react";
import "./Pokemon.css"

const Pokemon = ({pokeName}) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div id="infodiv">
      <p>
        Name: {pokemon.name} <br />
        Weight: {pokemon.weight} <br />
        Height: {pokemon.height} <br />
        Abilities:{" "}
        {pokemon.abilities &&
          pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
      </p>
    </div>
  );
};

export default Pokemon;