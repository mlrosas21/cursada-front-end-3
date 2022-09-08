import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/pokemon'><h3>Pokelist</h3></Link>
        <Link to='/types'><h3>Tipos</h3></Link>
    </div>
  )
}

export default Navbar