import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./PokemonDetails.css";

function PokemonDetails() {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then((res) => setSelectedPokemon(res.data));
  }, []);

  return (
    <>
      <div className="pokemon-link-container">
        <Link className="pokemon-back-link" to="/pokemon">
          Back
        </Link>
      </div>
      <div className="pokemon-card-container">
        {selectedPokemon && (
          <div className="pokemon-card">
            <h2 className="pokemon-card-title">{selectedPokemon.name}</h2>
            <img className="pokemon-card-img" src={selectedPokemon.image} />
          </div>
        )}
      </div>
    </>
  );
}

export default PokemonDetails;
