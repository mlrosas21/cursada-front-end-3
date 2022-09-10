import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Pokemon = () => {

    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeName.toLowerCase()}`
    const [poke, setPoke] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => setPoke(res.data))
    }, [url])

  return (
    <div className='poke-info'>
        <h2>{params.pokeName}</h2>
        <h2>{poke.name}</h2>
        <img src={poke.sprites?.front_default} alt=''/>
    </div>
  )
}

export default Pokemon