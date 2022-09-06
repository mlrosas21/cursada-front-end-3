import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
        <h1>This is the HOME page</h1>
        <button onClick={() => navigate(-1)}>Back</button>
        {/* Ejemplo con navigate */}
        <h3 onClick={() => navigate('/')}>Home</h3>
        <h3 onClick={() => navigate('/about')}>About</h3>
        <h3 onClick={() => navigate('/contacto')}>Contact</h3>
        <Outlet/>
    </div>
  )
}

export default Home