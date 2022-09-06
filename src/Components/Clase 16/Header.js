import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            {/* Ejemplo con Link */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacto'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Header