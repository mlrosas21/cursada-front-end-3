import React from 'react'

const Header = ({titulo, pokeSel}) => {

  const getPokemon = () => {
    if (pokeSel.id?.toString()?.length === 1) return `00${pokeSel.id}`
    if (pokeSel.id?.toString()?.length === 2) return `0${pokeSel.id}`
    if (pokeSel.id?.toString()?.length === 3) return `${pokeSel.id}`
}

  return (
    <div >
      {console.log('header')}
      <h1>{titulo}</h1>
      <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemon()}.png`} alt='' />
      <h2>Pokemon seleccionado: {pokeSel.name} </h2>
      <h2>Tipo de pokemon: {pokeSel.type[0]}</h2>
    </div>
  )
}

export default Header