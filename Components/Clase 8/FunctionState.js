import React, { useState } from 'react'

const FunctionState = () => {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  return (
    <div>{contador}
      <button onClick={incrementar} >Incrementar</button>
    </div>
  )
}

export default FunctionState