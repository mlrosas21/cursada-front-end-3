import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getTypes } from '../../Services/ApiService'
import './pokedex.css'
import { Link, Outlet } from 'react-router-dom'

const PokeTypes = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    getTypes()
    .then(res => setTypes(res.data.results))
  }, [])

  
  return (
    <>
    <div className='select-poke'>
      {types.map((type,index) => 
      <Link key={index} to={`${index+1}`}> 
        <p className='poke-name'>{type.name}</p >
      </Link>
      )}
    </div>
      <Outlet/>
    </>
  )
}

export default PokeTypes