import React, { useState, useEffect } from "react";
import "./Pokemon.css"

const Pokemon = ({pokeName}) => {
  const [pokemon, setPokemon] = useState({});
  const [pokeImg, setPokeImg] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [pokeName]);

  const hpStat = pokemon.stats && pokemon.stats.find((stat) => stat.stat.name === "hp");
  const attackStat = pokemon.stats && pokemon.stats.find((stat) => stat.stat.name === "attack")
  const idString = pokemon.id && pokemon.id < 100 ? `0${pokemon.id}` : pokemon.id;


  return (
    <div id="infodiv">
      <div id="namediv">
          <p>Name: {pokemon.name}</p>
      </div>
      <div id="hpdiv">
          <p>HP: {hpStat && hpStat.base_stat}</p>
      </div>
      <div id="attackdiv">
          <p>Attack: {attackStat && attackStat.base_stat}</p>
      </div>
      <div id="abilitiesdiv">
          <p>
          Abilities:{" "}
          {pokemon.abilities &&
          pokemon.abilities.map((ability) => ability.ability.name).join("\n")}
          </p>
      </div>
    
      <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${idString}.png`}/>
    </div>
  );
};

export default Pokemon;
