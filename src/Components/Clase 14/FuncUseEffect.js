import React, { useEffect, useState } from 'react'

const FuncUseEffect = () => {
  const [name, setName] = useState('Pablo')
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Se actualizó el estado de función')
  }, [count])

  return (
    <div>
      <h1>Componente de función</h1>
        Hola {name}!
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>X</button>
    </div>
  )
}

export default FuncUseEffect



// useEffect(() => {
//   console.log('Componente de función montado')
//   return () => {
//     console.log('El componente de función se desmontó')
//   }
// }, [])