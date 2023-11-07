import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  // Verifica si 'pokemons' es nulo o indefinido, o si no es un array válido
  if (!pokemons || !Array.isArray(pokemons) || pokemons.length === 0) {
    return <div >No se encontraron Pokémon.</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites?.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: [], // Valor predeterminado: un array vacío
};

export default PokemonList;
