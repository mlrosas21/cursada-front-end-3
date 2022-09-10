import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/'

export const getPokes = () => {
   return axios.get(url + 'pokemon?limit=150&offset=0')
}

export const getPoke = (poke) => {
    return axios.get(url + 'pokemon' + poke)
 }

 export const getTypes = () => {
    return axios.get(url + 'type')
 }
