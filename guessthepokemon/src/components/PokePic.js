import React from 'react';

// pokemonData.id
// pokemonData.name
// pokemonData.weight
// pokemonData.type[0]
// pokemonData.type[1]
// pokemonData.sprites.front_default

export default function PokePic(props) {

    return (
            <div >
                <h2>{props.selectedPokemonData.name}</h2>
                <img src={props.selectedPokemonData.image} />
                <button onClick={props.handleClick} >NEW POKEMON</button>
            </div>

    );
  }