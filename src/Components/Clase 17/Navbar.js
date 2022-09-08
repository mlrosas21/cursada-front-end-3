import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../configRoute'

const Navbar = () => {
  return (
    <div>
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.pokeList}><h3>Pokelist</h3></Link>
        <Link to={routes.pokeTypes}><h3>Tipos</h3></Link>
    </div>
  )
}

export default Navbar