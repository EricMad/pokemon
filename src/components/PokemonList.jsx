import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonList.css";
import { Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [rangeValue, setRangeValue] = useState(20);
  const [pokeNames, setPokeNames] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon")
      .then((res) => setPokemons(res.data));
  }, []);

  return (
    <div className="container">
      <form action="" className="poke-form">
        <input
          className="poke-form-input"
          type="range"
          min="1"
          max="1000"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </form>
      <div className="pokemons-container">
        {pokemons.slice(0, rangeValue).map((pokemon) => (
          <div className="pokemon-container">
            <Link to={`/pokemon/${pokemon.id}`}>
              <img className="pokemon-img" src={pokemon.image} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
