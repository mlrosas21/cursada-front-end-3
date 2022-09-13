import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Type = () => {

    const params = useParams()
    const url2 = `https://pokeapi.co/api/v2/type/${params.type}`
    const [type, setType] = useState({})
    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        axios.get(url2)
        .then(res => {
            setType(res.data)
            setPokeList(res.data.pokemon)
        })
    }, [url2])

  return (
    <div >
        <h2>Lista de pokemon tipo {type.name}</h2>
        <ul>
            {pokeList.map((e, index) => 
                <li key={index}> {e.pokemon.name} </li>
            )}
        </ul>
    </div>
  )
}

export default Type