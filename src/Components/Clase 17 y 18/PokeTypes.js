import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getTypes } from '../../Services/ApiService'
import './pokedex.css'

const PokeTypes = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    getTypes()
    .then(res => setTypes(res.data.results))
  }, [])

  
  return (
    <div className='select-poke'>
      {types.map(type => <p className='poke-name'>{type.name}</p >)}
    </div>
  )
}

export default PokeTypes