import {useState, useEffect} from 'react'
import './UseEffect.css'

const UseEffect = () => {
    // const url = 'https://dog.ceo/api/breeds/image/random'
    const url = 'https://api.thecatapi.com/v1/images/search'
    // const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'

    const [imagen, setImagen] = useState('')
    const [cambio, setCambio] = useState(false)

    useEffect(() =>{
        const fetchData = () => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setImagen(data[0].url)
            })
        }
        fetchData()
    }, [cambio])

    return (
        <div>
           <img src={imagen} alt=''/>
            <button onClick={() => setCambio(!cambio)} className='boton'>MIAU</button>
        </div>
    )
}

export default UseEffect