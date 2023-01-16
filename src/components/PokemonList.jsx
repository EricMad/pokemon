import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonList.css";
import { Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon")
      .then((res) => setPokemons(res.data));
  }, []);

  return (
    <div className="pokemons-container">
      {pokemons.map((pokemon) => (
        <div className="pokemon-container">
          <Link to={`/pokemon/${pokemon.id}`}>
            <img className="pokemon-img" src={pokemon.image} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
