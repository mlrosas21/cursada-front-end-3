import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import pokedex from '../../pokedex.json'
import './pokedex.css'

const PokeList = () => {
  return (
    <>
        <div className='select-poke'>
            {pokedex.map(poke => 
                <Link to={`${poke.name}`} key={poke.id}>{poke.name}</Link>
            )}
            
        </div>
        <Outlet/>
    </>
  )
}

export default PokeList