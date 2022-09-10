import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../configRoute'

const Navbar = () => {

  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  useEffect(() => {
    navigate(`pokemon/${search}`)
  }, [navigate, search])

  const searchPoke = (event) => {
    setSearch(event.target.value)
  }

  return (
    <nav className='header-fixed'>
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.pokeList}><h3>Pokelist</h3></Link>
        <Link to={routes.pokeTypes}><h3>Tipos</h3></Link>
        <input type='text' value={search} onChange={searchPoke}/>
    </nav>
  )
}

export default Navbar