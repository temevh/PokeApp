import React, { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div>
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