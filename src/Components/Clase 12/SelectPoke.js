import React from 'react'


const SelectPoke = ({pokedex, setPokeSel}) => {
  
  
  
  return (
    <div>
      {console.log('SelectPoke')}
      {pokedex.map( poke => 
        <p
          onClick={() => setPokeSel(poke)}
          key={poke.id} 
        >{poke.name}</p>)}
    </div>
  )
}

export default SelectPoke